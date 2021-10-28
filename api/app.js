'use strict';

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { sequelize } = require(path.join(__dirname, './models/index'));
const router = require(path.join(__dirname, './routes/index'));
var cors = require('cors');

// Variable to enable global error logging
const enableGlobalErrorLogging = process.env.ENABLE_GLOBAL_ERROR_LOGGING === 'true';

// Create the Express app
const app = express();

// Allowing CORS
app.use(cors());

// Use body parse
app.use(express.json());

// Setup morgan which gives us http request logging
app.use(morgan('dev'));

// Use the router
app.use(router);

// Send 404 if no other route matched
app.use((req, res) => {
  res.status(404).json({
    message: 'Route Not Found',
  });
});

// Setup a global error handler
app.use((err, req, res, next) => {
  if (enableGlobalErrorLogging) {
    console.error(`Global error handler: ${JSON.stringify(err.stack)}`);
  }

  // Display all errors as an error object
  res.status(err.status || 500).json({
    error: {
      type: err.type,
      status: err.status,
      message: err.message,
      fields: err.fields,
    },
  });
});

// Set app port
app.set('port', process.env.PORT || 5000);

// Start listening on our port
const server = app.listen(app.get('port'), () => {
  console.log(`Express server is listening on port ${server.address().port}`);
});

// Check db connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
