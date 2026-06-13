const fs = require('fs');
const N = fs.readFileSync(0).toString().trim();

let num = N;
let result = '';

while (num <= 100) {
    if (num >= 90) {
        result += 'A ';
    } else if (num >= 80) {
        result += 'B ';
    } else if (num >= 70) {
        result += 'C ';
    } else if (num >= 60) {
        result += 'D ';
    } else {
        result += 'F ';
    }
    num++;
}

console.log(result);