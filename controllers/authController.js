const jwt = require("jsonwebtoken");

const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

const getSignedJwtToken = user => {
  return jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRE
    }
  );
};

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = getSignedJwtToken(user);

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };

  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }

  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({
      success: true,
      userId: 1,
      token
    });
};

exports.signin = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  // 1) Validate email & password
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }
  // 2) Check for user
  // TODO - Code goes here
  // 2) Check if password matches
  // TODO - Code goes here

  // Fake user
  const user = {
    id: 1,
    name: "John Doe",
    email: "john@doe.com"
  };
  sendTokenResponse(user, 200, res);
});

exports.signout = asyncHandler(async (req, res, next) => {
  res.cookie("token", "none", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });

  res.status(200).json({
    success: true,
    data: {}
  });
});
