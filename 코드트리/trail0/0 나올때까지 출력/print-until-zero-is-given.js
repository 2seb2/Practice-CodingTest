const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let i = 0;
while(input[i] !== 0) {
    console.log(input[i]);
    i++;
}
