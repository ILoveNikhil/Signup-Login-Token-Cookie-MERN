// Create Token and saving in cookie

export const sendToken = async (user, statusCode, res) => {
  const token = await user.generateToken();

  // options for cookie
  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  res.status(statusCode).cookie("cientme_tokens", token, options).json({
    success: true,
    user,
  });
};
