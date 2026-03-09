function solution(s) {
    var answer = '';
    var isMinus = false;
    
    for (let i = 0; i < s.length; i++) {
        if ((s[0] === '-' || s[0] === '+') && i === 0) {
            if (s[0] === '-') {
                isMinus = true;
            } else {
                isMinus = false;
            }
        } else {
            answer += s[i];
        } 
    }
    
    return isMinus ? Number(answer) * (-1) : Number(answer);
}