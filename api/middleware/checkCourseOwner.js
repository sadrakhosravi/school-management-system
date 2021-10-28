'use strict';

// DB Controller
const dbController = require('../controllers/dbController');

// Middleware for checking the owner of the course based on the authenticated user
module.exports = async (req, res, next) => {
  const authenticatedUserId = req.user.id;
  const courseId = req.params.id;
  const course = await dbController.getCourseById(courseId);

  // If no course was found, create an error
  if (!course) {
    const error = new Error();
    error.type = 'Not Found';
    error.message = ['The course you were looking for was not found'];
    error.status = 404;
    next(error);
    return;
  }

  // If the authenticated user is not the owner of the course throw an authentication error
  if (course.userId !== authenticatedUserId) {
    const error = new Error();
    error.type = 'Authentication Error';
    error.message = ['Access denied! You are not the owner of the course'];
    error.status = 403;
    next(error);
    return;
  }

  // Make the queried course available in req.course to prevent extra unnecessary db query
  req.course = course;
  next();
};
