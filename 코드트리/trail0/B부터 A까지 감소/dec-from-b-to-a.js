const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

let A = Number(input[0]);
let B = Number(input[1]);

let result = '';
for (let i = 0; i <= B - A; i++) {
    result += `${B - i} `;
}

console.log(result);