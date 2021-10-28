/**
 * A wrapper function that implements try catch method used for api calls.
 * @param cb - the callback function to be executed.
 * @returns - The value of the callback function or the error from the server.
 */
const asyncHandler = cb => {
  return async (...args) => {
    try {
      // Execute the callback function
      return await cb(...args);
    } catch (error) {
      return error.response.data;
    }
  };
};

export default asyncHandler;
