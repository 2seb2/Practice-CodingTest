const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ');
const num_arr = arr.map(Number);

let result = '';

for (let i = 0; i < N; i++) {
    result += num_arr[i] ** 2 + ' ';
}

console.log(result);