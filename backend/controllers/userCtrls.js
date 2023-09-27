import { User } from "../models/userModel.js";
import { ErrorHandler } from "../utils/ErrorHander.js";
import { sendToken } from "../utils/sendToken.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
// import cloudinary from "cloudinary";
// signup
export const signup = catchAsyncErrors(async (req, res, next) => {
  const { fullName, userName, phoneNumber, email, password, avatar } = req.body;
  // if (!fullName || !userName || !phoneNumber || !email || !password) {
  //   return next(new ErrorHandler("Please enter all required field", 400));
  // }
  let user = await User.findOne({ email });
  if (user) {
    return next(new ErrorHandler("User already exists", 400));
  }

  // myCloud store avatar on cloudinary -- not working now
  // const myCloud = await cloudinary.v2.uploader.upload(avatar, {
  //   folder: "avatars",
  //   width: 150,
  //   crop: "scale",
  // });
  user = await User.create({
    fullName,
    userName,
    phoneNumber,
    email,
    password,
    // avatar: {
    //   public_id: myCloud.public_id,
    //   url: myCloud.secure_url,
    // },
    avatar: { public_id: "myCloud.public_id", url: "myCloud.secure_url" },
  });

  // send token and user details in frontend cookie
  sendToken(user, 201, res);
});
// login
export const login = async (req, res, next) => {
  const { email, password } = req.body;
  // checking if user has given password and email both
  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email & Password", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  // send token
  sendToken(user, 200, res);
};
