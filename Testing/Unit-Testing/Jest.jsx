// Testing
// Unit Testing
// Unit testing involves testing individual components or functions in isolation to ensure they work as intended. It helps catch bugs early and ensures that individual parts of the application perform correctly.

// Jest
// Jest is a popular testing framework for JavaScript, commonly used with React applications. It offers a simple API and comes with built-in assertions, mocks, and spies.

// Example Usage:
// sum.js
function sum(a, b) {
    return a + b;
  }
  module.exports = sum;
  
  // sum.test.js
  const sum = require('./sum');
  
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  