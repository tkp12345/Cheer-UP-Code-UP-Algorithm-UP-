function solution(array, commands) {
    let answer = new Array();

    commands.forEach(function(command) {
        const i = command[0];
        const j = command[1];
        const k = command[2];
        let slice_array = array.slice(i - 1, j);
        slice_array.sort();
        answer.push(slice_array[k - 1]);
    });
    return answer;
}