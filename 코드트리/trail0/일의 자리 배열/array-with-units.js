const fs = require('fs');
const input = (fs.readFileSync(0).toString().trim().split(' ')).map(Number);

let resultArr = [];

for (let i = 0; i < 10; i++) {
    if (i === 0 || i === 1) {
        resultArr.push(input[i]);
    } else {
        resultArr.push((resultArr[i - 2] + resultArr[i - 1]) % 10);
    }
}

console.log(resultArr.join(' '));