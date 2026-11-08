const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero"; 
    }
    return a / b;
}

const operations = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide,
    '%': (a, b) => a % b,
    '**': (a, b) => a ** b
};

function calculate(num1, operator, num2) {
    const operation = operations[operator];
    
    if (!operation) {
        return "Invalid operator";
    }
    
    return operation(num1, num2);
}

console.log(calculate(5, '+', 3)); 
console.log(calculate(10, '-', 4)); 
console.log(calculate(3, '*', 4)); 
console.log(calculate(10, '/', 2)); 
console.log(calculate(10, '/', 0)); 
console.log(calculate(10, '%', 3));
console.log(calculate(2, '**', 3));