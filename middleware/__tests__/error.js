const errorHandler = require("../error");
const { buildReq, buildRes, buildNext } = require("../../test/generate");

test("responds with 500 for development mode", () => {
  process.env = { NODE_ENV: "development" };
  const status = "ERROR_STATUS";
  const message = "ERROR_MESSAGE";
  const stack = "ERROR_STACK";
  const err = {
    statusCode: 500,
    status,
    message,
    stack
  };
  const req = buildReq();
  const res = buildRes();
  const next = buildNext();
  errorHandler(err, req, res, next);
  expect(next).not.toHaveBeenCalled();
  expect(res.status).toHaveBeenCalledWith(500);
  expect(res.status).toHaveBeenCalledTimes(1);
  expect(res.json).toHaveBeenCalledWith({
    success: false,
    error: err,
    message: err.message,
    stack: err.stack
  });
  expect(res.json).toHaveBeenCalledTimes(1);
});
