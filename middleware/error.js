const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    success: false,
    error: err,
    message: err.message,
    stack: err.stack
  });
};

const sendErrorProd = (err, res) => {
  // Operational, trusted error: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      success: false,
      message: err.message
    });
    // Programming or other unknown error: don't leak error details
  } else {
    // 1) Log error
    // eslint-disable-next-line no-console
    console.error("ERROR 💥", err);
    // 2) Send generic message
    res.status(500).json({
      success: false,
      message: "Something went very wrong!"
    });
  }
};

const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  err.message = err.message || "Server Error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = { ...err };
    sendErrorProd(error, res);
  }
};

module.exports = errorHandler;
