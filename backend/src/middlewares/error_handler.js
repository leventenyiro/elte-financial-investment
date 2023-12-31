import { validationResult } from "express-validator";

function errorHandler(req, res, next) {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(422).json(error.array()[0].msg);
  }
  next();
}

export default errorHandler;
