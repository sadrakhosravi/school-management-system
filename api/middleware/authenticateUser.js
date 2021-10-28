'use strict';

const path = require('path');
const bcrypt = require('bcryptjs');
const auth = require('basic-auth');

// DB Models
const { User } = require(path.join(__dirname, '../models/index'));

// Checks the submitted user authentication and validates it
module.exports = async (req, res, next) => {
  // Parse user's credential from the Authorization header
  const credential = auth(req);

  let message = '';

  if (credential) {
    const user = await User.findOne({ where: { emailAddress: credential.name }, raw: true });

    // If user exits, check their password
    if (user) {
      const isAuthenticated = bcrypt.compareSync(credential.pass, user.password);

      // If user's password is valid
      if (isAuthenticated) {
        req.user = user;
      } else {
        message = 'Your password is incorrect, please try again.';
      }
    } else {
      message = `User: ${credential.name} was not found! Please try again.`;
    }
  } else {
    message = 'No authentication found.';
  }

  // If an error has occurred throw an error, else continue with the user
  if (message) {
    const err = new Error(message);
    err.status = 401;
    err.type = 'Authentication Error';
    next(err);
  } else {
    next();
  }
};
