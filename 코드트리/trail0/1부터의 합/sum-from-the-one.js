const fs = require('fs');
const N = Number(fs.readFileSync(0).toString().trim());

let preSum = 0;
let answer = 0;
for (let i = 1; i <= N; i++) {
    preSum += i;
    if (preSum >= N) {
        answer = i;
        break;
    }
}

console.log(answer);