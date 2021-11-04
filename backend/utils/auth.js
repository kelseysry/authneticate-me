// backend/utils/auth.js
// store auth helper function

const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config');
const { User } = require('../db/models');

const { secret, expiresIn } = jwtConfig;

// This function will be used in the login and signup routes. function sets up the JWT cookie after
// a user is logged in or signed up
// Sends a JWT Cookie
const setTokenCookie = (res, user) => {
  // Create the token.
  const token = jwt.sign(
    { data: user.toSafeObject() }, //  We're expecting the user parameter to be an instance of the User model, so that we can use the instance method that we defined on the model
    secret,
    { expiresIn: parseInt(expiresIn) }, // 604,800 seconds = 1 week
  );

  const isProduction = process.env.NODE_ENV === "production";

  // Set the token cookie
  // After the JWT is created, it's set to an HTTP-only cookie on the response as a token cookie.
  res.cookie('token', token, {
    maxAge: expiresIn * 1000, // maxAge in milliseconds
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction && "Lax",
  });

  return token;
};


// will be added as a pre-middleware for route handlers and for
// authentication middleware - will restore the session user based on the contents of the JWT cookie.
// b/c certain authenticated routes will require the identify of the current session user
const restoreUser = (req, res, next) => {
  // token parsed from cookies
  const { token } = req.cookies;

  return jwt.verify(token, secret, null, async (err, jwtPayload) => {
    if (err) {
      return next();
    }

    try {
      const { id } = jwtPayload.data;
      req.user = await User.scope('currentUser').findByPk(id);
    } catch (e) {
      res.clearCookie('token');
      return next();
    }

    if (!req.user) res.clearCookie('token');

    return next();
  });
};

// authentication middleware - requiring a session user to be authenticated before accessing a route.
// If there is no current user, return an error
const requireAuth = [
  restoreUser, // will ensure  if a valid JWT cookie exists, the session user will be loaded into the req.user attribute.
  function (req, res, next) {
    // The second middleware will check req.user and will go to the next middleware if
    //there is a session user present there. If there is no session user, then an error
    // will be created and passed along to the error-handling middlewares.
    if (req.user) return next();

    const err = new Error('Unauthorized');
    err.title = 'Unauthorized';
    err.errors = ['Unauthorized'];
    err.status = 401;
    return next(err);
  },
];

module.exports = { setTokenCookie, restoreUser, requireAuth };
