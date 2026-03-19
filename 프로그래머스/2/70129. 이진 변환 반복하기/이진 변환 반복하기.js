function solution(s) {
    var answer = [0, 0];
    
    function popZero(str) {
        if(str.length === 1) {
            return answer;
        }
        let newStr = str.split('').filter((el) => el === '1');
        answer[1] += (str.length - newStr.length);
        
        let newDigit = newStr.length.toString(2);
        answer[0] += 1;
        
        popZero(newDigit);
        
    }
    
    popZero(s);
    
    return answer;
}