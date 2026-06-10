const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const A_Math = Number(input[0].split(' ')[0]);
const A_Eng = Number(input[0].split(' ')[1]);
const B_Math = Number(input[1].split(' ')[0]);
const B_Eng = Number(input[1].split(' ')[1]);

if ((A_Math > B_Math) && (A_Eng > B_Eng)) {
    console.log(1);
} else {
    console.log(0);
}