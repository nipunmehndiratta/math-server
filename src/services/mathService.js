// src/services/mathService.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class MathService {
  async addition(num1, num2) {
    const sum = Number(num1) + Number(num2);
    
    // Store calculation in database
    const calculation = await prisma.calculation.create({
      data: {
        operation: 'addition',
        input: `${num1},${num2}`,
        result: sum.toString()
      }
    });
    
    return { sum, id: calculation.id };
  }
  
  async factorial(number) {
    // Calculate factorial
    let result = BigInt(1);
    for (let i = 2; i <= number; i++) {
      result *= BigInt(i);
    }
    
    // Store in database
    const factorial = await prisma.factorial.create({
      data: {
        number: Number(number),
        result: result.toString()
      }
    });
    
    return { factorial: result.toString(), id: factorial.id };
  }
  
  async fibonacci(count) {
    // Generate Fibonacci sequence
    const sequence = [];
    let a = BigInt(0);
    let b = BigInt(1);
    
    for (let i = 0; i < count; i++) {
      sequence.push(a.toString());
      const temp = a;
      a = b;
      b = temp + b;
    }
    
    // Store in database
    const fibonacci = await prisma.fibonacci.create({
      data: {
        count: Number(count),
        sequence: sequence.join(',')
      }
    });
    
    return { sequence, id: fibonacci.id };
  }
  
  async getCalculationHistory() {
    return prisma.calculation.findMany({
      orderBy: { createdAt: 'desc' },
      take: 10
    });
  }
}

module.exports = new MathService();
