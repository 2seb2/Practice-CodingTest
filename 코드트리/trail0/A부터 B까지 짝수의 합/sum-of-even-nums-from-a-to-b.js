const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const A = input[0];
const B = input[1];

let result = 0;

for (let i = A; i <= B; i++) {
    if (i % 2 === 0) {
        result += i;
    }
}

console.log(result);