const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

const reversedInput = input.reverse();

console.log(reversedInput.join(''));
