/**
 * @description
 * defined an asyncHandler utility function.
 * This function is often used in Express.js applications to handle asynchronous functions that return Promises.
 * It simplifies error handling for asynchronous routes and middleware.
 *
 * @summary
 * 1. asyncHandler takes a function fn as its parameter.
 *      This function is assumed to be asynchronous and return a Promise.
 * 2. The returned value of asyncHandler is a new function that takes req, res, and next as its parameters.
 * 3. Inside this new function, fn(req, res, next) is called.
 *      The result of this function call is expected to be a Promise.
 * 4. Promise.resolve() is used to ensure that the result of fn(req, res, next) is a Promise.
 *      This is done to handle cases where fn might not explicitly return a Promise.
 * 5. .catch(next) is used to catch any errors that might occur during the execution of the asynchronous function (fn).
 *      If an error occurs, it is passed to the next function, which is the Express error-handling middleware.
 * @param {*} fn
 * @returns
 */
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

export default asyncHandler;
