const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { ValidationError } = require("sequelize");


const routes = require('./routes');

const { environment } = require('./config');
const isProduction = environment === 'production';

// Initialize the Express application:
const app = express();

// logging information about requests and responses
app.use(morgan('dev'));

app.use(cookieParser()); // parses cookies
app.use(express.json()); // parsing JSON bodies of request with Content-Type of "application/json"

// Security Middleware
if (!isProduction) {
  // enable cors only in development
  app.use(cors());
}
// helmet helps set a variety of headers to better secure your app
app.use(helmet({
  contentSecurityPolicy: false
}));

// Set the _csrf token and create req.csrfToken method
app.use(
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true,
    },
  })
);


// connects all routes
app.use(routes);

// error handler - will catch any request that don't match defined routes
// and create server error with status code 404
// Catch unhandled requests and forward to error handler.
app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
});

// error handler - catches sequelize errors and formats them before
// send error response
// If the error that caused this error-handler to be called is an instance of
// ValidationError from the sequelize package, then the error was created
//from a Sequelize database validation error and the additional keys
//of title string and errors array will be added to the error and passed
// into the next error handling middleware.
app.use((err, _req, _res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = 'Validation error';
  }
  next(err);
});

// error handler - formats all the errors before returning a json response
// include error msg, errors [], error stack trace if in development, status code
app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || 'Server Error',
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

module.exports = app;


// adding _ for req and res
// adding the _ is convention for when you know you aren’t going to use it
// The underscore tells other developers (and your linter) that those parameters won't be used within the function's body
