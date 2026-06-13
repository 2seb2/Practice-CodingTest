const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

const first = input[0];
const second = input[1];

let result = '';

if (first.length > second.length) {
    result += first + ' ' + first.length;
} else if (first.length === second.length) {
    result += 'same';
} else {
    result += second + ' ' + second.length;
}

console.log(result);