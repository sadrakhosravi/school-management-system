'use strict';

// DB Controller
const dbController = require('./dbController');

// Helpers
const asyncHandler = require('../helpers/asyncHandler');

// Require Bcryptjs
const bcrypt = require('bcryptjs');

/// USERS CONTROLLER - LOGIC ///

// GET METHODS
// GET method - get the authenticated user
exports.getAuthenticatedUser = async (req, res) => {
  const { id, firstName, lastName, emailAddress } = req.user;
  res.json({
    id,
    firstName,
    lastName,
    emailAddress,
  });
};

// POST METHODS
// POST method - creates a new user in the database
exports.createUser = asyncHandler(async (req, res, next) => {
  // Hash users password, if give, before saving it to the db
  if (req.body.password) {
    req.body.password = await bcrypt.hash(req.body.password, 10);
  }

  console.log(req.body.password);
  // Try to create the user, if fail, throw an error
  const user = await dbController.createUser(req.body);

  console.log(user);
  // If successful
  res.location('/').status(201).end();
});
