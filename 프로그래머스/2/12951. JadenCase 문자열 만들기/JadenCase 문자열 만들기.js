function solution(s) {
    let arr = s.split(' ');
    arr = arr.map((el) => {
        return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
    });
    
    return arr.join(' ');
}