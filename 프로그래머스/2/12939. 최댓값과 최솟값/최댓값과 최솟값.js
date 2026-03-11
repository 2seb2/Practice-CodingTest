function solution(s) {
    let sNumArr = s.split(' ');
    
    let maxNum = Math.max(...sNumArr);
    let minNum = Math.min(...sNumArr);
    
    return `${minNum} ${maxNum}`;
}