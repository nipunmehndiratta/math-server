// src/routes/mathRoutes.js
const express = require('express');
const router = express.Router();
const mathController = require('../controllers/mathController');
const { validateAddition, validateFactorial, validateFibonacci } = require('../middleware/validator');


router.post('/addition', validateAddition, mathController.addition);
router.get('/factorial/:number', validateFactorial, mathController.factorial);
router.get('/fibonacci/:count', validateFibonacci, mathController.fibonacci);
router.get('/history', mathController.getCalculationHistory);

module.exports = router;

