function solution(s){
    let answer = true;
    
    let startN = 0;
    let endN = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (i===0) { // 만약 첫번째 문자라면
            if (s[i] === ')') { // 만약 ')'
                answer = false; // anwer = false;
                break; // break;
            } else {
                startN++;
            }
        } else { // 첫번째 문자가 아니라면
            if(startN >= endN) { // '('의 개수 >= ')'의 개수
                if(s[i]==='(') { // s[i]가 '(' 이면
                    startN++;
                } else { // s[i]가 ')' 이면
                    endN++;
                }  
            } else { // '('의 개수 < ')'의 개수
                answer = false;
                break;
            }
        }
    }
    
    if (startN !== endN) { // 만약 '('의 개수 !== ')'의 개수  
        answer = false;
    }
    
    return answer;
}
    