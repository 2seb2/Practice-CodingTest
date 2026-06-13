const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const result = input.slice(0, 1) + 'a' + input.slice(2, input.length - 2) + 'a' + input.slice(input.length - 1, input.length);
console.log(result);