const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let threeCount = 0;
let fiveCount = 0;

for (let i = 0; i < input.length; i++) {
    if (input[i] % 3 === 0) {
        threeCount++;
    }
    if (input[i] % 5 === 0) {
        fiveCount++;
    }
}

console.log(threeCount + ' ' + fiveCount);