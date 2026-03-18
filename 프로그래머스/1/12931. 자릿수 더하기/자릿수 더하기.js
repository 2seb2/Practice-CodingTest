function solution(n) {
    let nArr = String(n).split('');
    nArr = nArr.map((el) => parseInt(el));
    return nArr.reduce((a, b) => a + b, 0);
}