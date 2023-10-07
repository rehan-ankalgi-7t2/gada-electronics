/**
 * This middleware is designed to handle situations where a route or resource is not found. Let me explain the code:
 * 1. The `notFound` function takes three parameters: `req` (request), `res` (response), and `next` (next middleware function).
 * 2. Inside the function, it creates a new `Error` object with a message that includes the original URL from the request, indicating that the resource was not found.
 * 3. It sets the HTTP status code of the response to 404 using `res.status(404)`. This indicates that the requested resource was not found.
 * 4. The `next(error)` function is then called, passing the error object to the next middleware in the stack. This is generally how errors are propagated through Express middleware.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const notFound = (req, res, next) => {
  const error = new Error(`not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

/**
 * @description This middleware is designed to handle errors that occur during the processing of a request. Let's break down the code:
 *
 * @param {*} err
 * @param {*} req
 * @param {*} res
 * @param {*} next
 *
 * 1. The errorHandler function takes four parameters: err (error object), req (request), res (response), and next (next middleware function).
 * 2. It checks if the existing response status code is 200 (OK). If it is, it sets the statusCode to 500 (Internal Server Error); otherwise, it keeps the existing status code.
 * 3. It retrieves the error message from the err object.
 * 4. It sets the response status code using res.status(statusCode) and sends a JSON response with information about the error, including the error message, stack trace (in non-production environments), and a success flag set to false.
 * 5. The stack property of the response contains the stack trace of the error. However, in a production environment (process.env.NODE_ENV === "production"), it is replaced with the string "🥞" to avoid exposing sensitive information.
 */
const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
    success: false,
  });
};

export { notFound, errorHandler };
