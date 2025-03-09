// middleware/auth.js
const jwt = require('jsonwebtoken');

// Required authentication
const auth = function(req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

// Optional authentication
auth.optional = function(req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // If no token, just continue (don't require auth)
  if (!token) {
    return next();
  }

  // Verify token if present
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
  } catch (err) {
    // Ignore invalid tokens for optional auth
  }
  next();
};

module.exports = auth;