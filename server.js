const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

const ErrorResponse = require("./utils/errorResponse");
const errorHandler = require("./middleware/error");

// Route files
const auth = require("./routes/auth");
const drums = require("./routes/drums");

process.on("uncaughtException", err => {
  // eslint-disable-next-line no-console
  console.log("UNCAUGHT EXCEPTION! Shutting down...".red.bold);
  // eslint-disable-next-line no-console
  console.log(err.name, err.message);
  // exit process
  process.exit(1);
});

// Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Enable CORS
app.use(cors());

// Body parser
app.use(express.json());

// Mount routers
app.use("/api/v1/auth", auth);
app.use("/api/v1/drums", drums);

app.all("*", (req, res, next) => {
  next(new ErrorResponse(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
