// function solution(array, commands) {
//     var answer = [];

//     for(var i=0; i<commands.length;i++){
//         var list = array.slice(commands[i][0]-1, commands[i]
//         							[1]).sort((a,b)=>{return a-b});

//         answer.push(list[commands[i][2]-1]);
//     }

//     return answer;
// }

const numbers = [10, 3, 8, 4, 1];
numbers.sort(function(a, b) {
    console.log('a:', a, 'b:', b);
    return (b - a);

});
console.log(numbers);

// a: 3 b: 10
// a: 8 b: 3
// a: 8 b: 10
// a: 8 b: 3
// a: 4 b: 8
// a: 4 b: 3
// a: 1 b: 8
// a: 1 b: 4
// a: 1 b: 3