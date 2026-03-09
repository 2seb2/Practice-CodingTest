function solution(x, n) {
    var answer = [];
    var nextNum = 0;
    
    for (i = 1; i <= n; i++) {
        nextNum += x;
        answer.push(nextNum);
    }
    
    return answer;
}