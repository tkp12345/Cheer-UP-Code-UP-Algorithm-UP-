// let arr = [555, 41, 33, 21, 52]
// let commands = [
//     [2, 5, 3],
//     [4, 4, 1],
//     [1, 7, 3]
// ];

// console.log(commands[0][0])
// const array = arr.slice(2 - 1, 5).sort();


// console.log(array[3 - 1]);


function solution(arr, commands) {
    //console.log('받은인자:', commands, "\n");
    var Narr = [];
    for (var commands_arr of commands) {

        //console.log('commands_arr:', commands_arr);
        let array = arr.slice(commands_arr[0] - 1, commands_arr[1]).sort();
        // console.log('array:', array);
        //console.log('정답:', array[commands_arr[2] - 1]);
        // console.log('array 상태:', array, "\n");
        Narr.push(array[commands_arr[2] - 1]);
    }
    console.log(Narr);
    return Narr;
}

solution([1, 5, 2, 6, 3, 7, 4], [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3]
]);