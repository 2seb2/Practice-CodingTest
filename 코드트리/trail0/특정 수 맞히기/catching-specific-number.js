const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let i = 0;
let result = '';

while(1) {
    if(input[i] > 25) {
        result += 'Lower\n';
    } else if( input[i] < 25) {
        result += 'Higher\n';
    } else {
        result += 'Good';
        break;
    }
    i++;
}

console.log(result);