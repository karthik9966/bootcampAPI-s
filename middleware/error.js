const ErrorResponse = require("../util/errorResponse");
const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  if (err.name === "CastError") {
    const message = `Resource not found with given ID ${error.value}`;
    error = new ErrorResponse(message, 404);
  }

  if (err.code === 11000) {
    const message = "Duplicate feild value enetered";
    error = new ErrorResponse(message, 400);
  }

  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((value) => value.message);
    error = new ErrorResponse(message, 400);
  }

  res
    .status(error.statuscode || 500)
    .send({ success: false, message: error.message || "Server Error" });
};

module.exports = errorHandler;
