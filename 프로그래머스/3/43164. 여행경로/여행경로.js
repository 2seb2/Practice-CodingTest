function solution(tickets) {
    const answer = [];
    const visited = new Array(tickets.length).fill(false);
    
    function dfs(currentAirport, route) {
        if (visited.every(v => v === true)) {
            answer.push([...route]);
            return;
        }

        for (let i = 0; i < tickets.length; i++) {
            if (!visited[i] && tickets[i][0] === currentAirport) {
                visited[i] = true;
                route.push(tickets[i][1]);

                dfs(tickets[i][1], route);

                // 다시 돌아가서 경로 다시 찾기
                visited[i] = false;
                route.pop();
            }
        }
    }
    
    dfs("ICN", ["ICN"]);
    let result = answer.sort((a, b) => a.join('') < b.join('') ? -1 : 1);
    return result[0];
}