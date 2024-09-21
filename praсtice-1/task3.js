let a = 10;
let b = 100;
let c = 25;

let maxnum = a;
if (maxnum < b) {
    maxnum = b;
} else if (maxnum < c) {
    maxnum = c;
};

console.log(`TASK3\nMAX of ${a}, ${b}, ${c} is ${maxnum}`);