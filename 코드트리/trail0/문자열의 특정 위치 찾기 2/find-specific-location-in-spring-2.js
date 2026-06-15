const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const fruits = ["apple", "banana", "grape", "blueberry", "orange"];
let result = [];

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i][2] === input || fruits[i][3] === input) {
        result.push(fruits[i]);
    }
}

console.log(result.length !== 0 ? result.join('\n') + '\n' + result.length : 0);