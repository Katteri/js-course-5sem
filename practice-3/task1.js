console.log('TASK1');

function calc(a, b, oper) {
    try {
        switch(oper) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                if (b === 0) {
                    throw new RangeError('You cannot divide by zero');
                }
                else {
                    return a / b;
                }
            case '%':
                if (b === 0) {
                    throw new RangeError('You cannot divide by zero');
                }
                else {
                    return a % b;
                }
            default:
                if (!a) {
                    throw new ReferenceError('There is no first value');
                } else if (!b) {
                    throw new ReferenceError('There is no second value');
                } else {
                    throw new ReferenceError('There is no such operator');
                }
        }
    } catch (err) {
        console.log(`${err.name}: ${err.message}\n${err.stack}`);
    }
};
let res = calc(5, 3, '/');
console.log();
console.log((res !== undefined)? res : ' ');
res = calc(5);
console.log((res !== undefined)? res : ' ');
res = calc(5, 0, '/');
console.log((res !== undefined)? res : ' ');

console.log(`\nLet's create new error class\n\n`);

class DivideError extends Error {
    constructor(message) {
    super(message);
    this.name = 'DivideError';
    this.message = 'You cannot divide by zero';
  }
}

function newCalc(a, b, oper) {
    try {
        switch(oper) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                if (b === 0) {
                    throw new DivideError();
                }
                else {
                    return a / b;
                }
            case '%':
                if (b === 0) {
                    throw new DivideError();
                }
                else {
                    return a % b;
                }
            default:
                if (!a) {
                    throw new ReferenceError('There is no first value');
                } else if (!b) {
                    throw new ReferenceError('There is no second value');
                } else {
                    throw new ReferenceError('There is no such operator');
                }
        }
    } catch (err) {
        if (err instanceof DivideError) {
            console.log(`There is divide by zero error!\nName of error: ${err.name}\nMessage of error: ${err.message}`);
        } else {
            console.log(`${err.name}: ${err.message}\n${err.stack}`);
        }
    }
};

res = newCalc(1, 0, '/');
console.log((res !== undefined)? res : ' ');
