const fs = require('fs');
const N = Number(fs.readFileSync(0).toString().trim());

if ((N % 2 === 0 && N % 5 === 0) || (N % 2 !== 0 && N % 3 === 0)) {
    console.log('true');
} else {
    console.log('false');
}