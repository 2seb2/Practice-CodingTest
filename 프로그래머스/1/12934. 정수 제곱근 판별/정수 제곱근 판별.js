function solution(n) {
    let prevAnswer = 0;
    if(Number.isInteger(Math.sqrt(n))) {
        prevAnswer = Math.sqrt(n);
    } else {
        return -1;
    }
    var answer = (prevAnswer + 1) ** 2;
    return answer;
}