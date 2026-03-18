function solution(a, b) {
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }
    
    var answer = 0;
    
    for (i = a; i < b+1; i++) {
        answer += i;
    }
    
    return answer;
}