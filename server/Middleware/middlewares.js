const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');


function checkAuth(req, res, next) {
  const token=req.headers['authorization'].split(' ')[1];
  console.log(req.headers);

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ error: 'Unauthorized' });
  }
}


// Middleware function to validate user registration data
const validateRegistrationData = [
    body('name').isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('password')
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters long')
      .matches(/^(?=.*\d)(?=.*[A-Z])/)
      .withMessage('Password must contain at least one uppercase letter and one number'),
    
    // Middleware continuation if validation passes
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    }
];

// Middleware function to check email and password
const checkEmailAndPassword = [
    body('email').notEmpty().withMessage('Email is required')
      .isEmail().withMessage('Invalid email address'),
    body('password').notEmpty().withMessage('Password is required'),
    
    // Middleware continuation if checks pass
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    }
  ];

module.exports = {
  validateRegistrationData,
  checkEmailAndPassword,
  checkAuth
};
