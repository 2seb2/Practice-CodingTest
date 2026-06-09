const fs = require('fs');
const ch = fs.readFileSync(0).toString().trim();

let result = '';
for (let i = 0; i < 8; i++) {
    result += ch;
}

console.log(result);
