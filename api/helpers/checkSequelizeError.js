'use strict';

// Check if the error is related to sequelize and decide based
// on the sequelize error type
module.exports = error => {
  // Create the error object to be returned
  let errorObj = {};

  // Check if there is any validation errors
  if (error.name === 'SequelizeValidationError') {
    errorObj.message = error.errors.map(err => err.message);
    errorObj.fields = error.errors.map(err => err.path);
    errorObj.status = 400;
    errorObj.type = 'Validation Error';
    return errorObj;
  }

  if (error.name === 'SequelizeUniqueConstraintError') {
    errorObj.message = error.errors.map(err => err.message);
    errorObj.fields = error.errors.map(err => err.path);
    errorObj.status = 400;
    errorObj.type = 'Unique Constraint Error';
    errorObj.fields = error.fields;
    return errorObj;
  }

  // If non of the error above have occurred, send back the original error
  errorObj = error;
  return errorObj;
};
