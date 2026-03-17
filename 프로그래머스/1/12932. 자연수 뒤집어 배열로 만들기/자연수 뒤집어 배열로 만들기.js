function solution(n) {
    let s = String(n);
    var answer = s.split('');
    answer = answer.map((el) => Number(el));
    return answer.reverse();
}