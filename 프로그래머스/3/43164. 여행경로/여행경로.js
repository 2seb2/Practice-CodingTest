function solution(tickets) {
    const answer = [];
    const visited = new Array(tickets.length).fill(false);
    
    function dfs(현재공항, 경로) {
        if (visited.every(v => v === true)) {
            answer.push([...경로]);
            return;
        }

        for (let i = 0; i < tickets.length; i++) {
            if (!visited[i] && tickets[i][0] === 현재공항) {
                visited[i] = true;
                경로.push(tickets[i][1]);

                dfs(tickets[i][1], 경로);

                // 다시 돌아가서 경로 다시 찾아야,,?
                visited[i] = false;
                경로.pop();
            }
        }
    }
    
    dfs("ICN", ["ICN"]);
    let result = answer.sort((a, b) => {
        if (a.join('') < b.join('')) {
            return -1;
        }
        if (a.join('') < b.join('')) {
            return 1;
        }
    });
    return result[0];
}