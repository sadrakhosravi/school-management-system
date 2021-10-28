'use strict';

// DB module
const { Course, User } = require('../models');

/// COURSE DB LOGIC ///

// Find all courses
exports.getAllCourses = async () => {
  return await Course.findAll({
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
    include: [
      {
        model: User,
        attributes: ['firstName', 'lastName', 'emailAddress'],
      },
    ],
  });
};

// Find a single course
exports.getCourseById = async id => {
  return await Course.findByPk(id, {
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
    include: [
      {
        model: User,
        attributes: ['firstName', 'lastName', 'emailAddress'],
      },
    ],
  });
};

// Create a course
exports.createCourse = async courseData => {
  return await Course.create(courseData);
};

// Update a course
exports.updateCourse = async (course, courseData) => {
  await course.update(courseData);
};

// Delete a course
exports.deleteCourse = async course => {
  await course.destroy();
};

/// USER DB LOGIC ///

// Create a new user
exports.createUser = async userData => await User.create(userData);
