'use strict';

// Load sequelize error checker
const checkSequelizeError = require('./checkSequelizeError');

// Async handler middleware to wrap each route
module.exports = cb => {
  return async (req, res, next) => {
    try {
      // Execute the callback function
      await cb(req, res, next);
    } catch (err) {
      // Check if sequelize has thrown an error
      const error = checkSequelizeError(err);
      // Forward the error to the global error handler
      next(error);
    }
  };
};
