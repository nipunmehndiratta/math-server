// src/controllers/mathController.js
const mathService = require('../services/mathService');

class MathController {
  async addition(req, res, next) {
    try {
      const { num1, num2 } = req.body;
      const result = await mathService.addition(num1, num2);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
  
  async factorial(req, res, next) {
    try {
      const { number } = req.params;
      const result = await mathService.factorial(Number(number));
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
  
  async fibonacci(req, res, next) {
    try {
      const { count } = req.params;
      const result = await mathService.fibonacci(Number(count));
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
  
  async getCalculationHistory(req, res, next) {
    try {
      const history = await mathService.getCalculationHistory();
      res.status(200).json(history);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new MathController();
