'use strict';

const path = require('path');
const express = require('express');
const router = express.Router();

// Require API Routes
const usersRouter = require('./api/users');
const coursesRouter = require('./api/courses');

/* GET home page. */
router.get('/', async (req, res, next) => {
  res.send('Hello');
});

// API Users router - /api/users
router.use('/api', usersRouter);
router.use('/api', coursesRouter);

module.exports = router;
