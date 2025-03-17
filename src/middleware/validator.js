// src/middleware/validator.js
const { body, param, validationResult } = require('express-validator');

const validateAddition = [
  body('num1').isNumeric().withMessage('First number must be numeric'),
  body('num2').isNumeric().withMessage('Second number must be numeric'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

const validateFactorial = [
  param('number').isInt({ min: 0, max: 170 }).withMessage('Number must be a non-negative integer (max 170)'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

const validateFibonacci = [
  param('count').isInt({ min: 1, max: 1000 }).withMessage('Count must be a positive integer (max 1000)'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = {
  validateAddition,
  validateFactorial,
  validateFibonacci
};
