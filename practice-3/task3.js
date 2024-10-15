import add, { circleArea, exp, subtract, multiply, square} from './task3-math.js';
import * as constants from './task3-constants.js';

console.log('TASK3\n');
console.log(`Addition: 2 + 3 = ${add(2, 3)}`);
console.log(`Subtraction: 5 - 3 = ${subtract(5, 3)}`);
console.log(`Multiplication: 4 * 6 = ${multiply(4, 6)}`);
console.log(`Area of circle with radius 5: ${circleArea(5)}`);
console.log(`Exponential of 2: ${exp(2)}`);
console.log(`Square of 4: ${square(4)}`);
console.log(`Pi: ${constants.pi}`);
console.log(`Exponential: ${constants.e}`);