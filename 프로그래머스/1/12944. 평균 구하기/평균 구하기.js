function solution(arr) {
    var arrSum = 0;
    
    for (i = 0; i < arr.length; i++) {
        arrSum += arr[i];
    }
    
    var answer = arrSum / arr.length;
    return answer;
}