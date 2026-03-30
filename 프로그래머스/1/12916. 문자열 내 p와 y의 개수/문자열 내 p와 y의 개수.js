function solution(s){
    let answer = false;
    let num = [0, 0];
    s = s.toLowerCase().split('');
    
    console.log(s);
    
    s.forEach((el)=> {
        if (el === 'p'){
            num[0]++;
        }
        if (el === 'y'){
            num[1]++;
        }
    })
    
    console.log(num);
    
    if(num[0] === num[1]) {
        answer = true;
    }

    return answer;
}