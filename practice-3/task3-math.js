import { pi, e } from './task3-constants.js';

export function circleArea(radius) {
  return pi * radius * radius;
}

const exp = (x) => e ** x;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function square(a) {
  return a * a;
}

export default add;
export {exp, subtract, multiply, square};