import { ErrorHandler } from "../utils/ErrorHander.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

export const isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { cientme_token } = req.cookies;

  if (!cientme_token) {
    return next(new ErrorHandler("Please Login to access this resource", 401));
  }

  const decodedData = jwt.verify(cientme_token, process.env.JWT_SECRET);

  req.user = await User.findById(decodedData.id);

  next();
});
