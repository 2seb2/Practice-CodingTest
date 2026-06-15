const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const A = input[0];
const B = input[1];

let now = A;
let result = '';
while (now <= B) {
    result += (now + ' ');

    if (now % 2 === 0) {
        now += 3;
    } else {
        now *= 2;
    }
}

console.log(result);