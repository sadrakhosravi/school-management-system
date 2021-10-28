'use strict';

const path = require('path');
const express = require('express');
const router = express.Router();

// Require controllers
const userController = require('../../controllers/userController');

// Require middleware
const authenticateUser = require('../../middleware/authenticateUser');

/// API USERS ROUTES ///

// GET request for getting the authenticated user's information
router.get('/users', authenticateUser, userController.getAuthenticatedUser);

// POST request for creating a new user
router.post('/users', userController.createUser);

module.exports = router;
