function solution(n) {
    let sArr = String(n).split('');
    let answer = Number(sArr.sort((a, b) => b - a).join(''));

    return answer;
}