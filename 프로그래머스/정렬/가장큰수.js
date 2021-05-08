// numbers=[655, 10 ,2 ,11]

// //sort 양수 이면 순서그래도 
// //sort 양수아니면 순서 바뀌어서 
// // numbers.sort((a,b)=>{
// //     console.log(a,b);

// // });
// // let a=numbers.map(v=> v+'');

// let a = numbers.map( 
//      v=>v.toString()).sort((a,b) => Number(b+a) - Number(a+b))
//      a = a[0]=='0'? '0': a.join('');


// console.log(a);

// //숫자가크면 마이너스 => 뒤로보내고 
// //숫자가 작으면 플러스 => 앞으로 보내기
// // console.log( )




// // function solution(numbers){
// //     let answers = ''; 
// //     numbers.sort( (a,b)=> {
// //         return Number
// //     })
// // }


// function solution(numbers) {
//     let result = numbers.sort().reverse().join('');
//     console.log(result)
// }

// let arr = [0, 0, 0, 0, 0];

// solution(arr);
// 숫자 return -1  바꿈
// 숫자 return  1  안바꿈 
//a-b 오름  , b-a 내림 




// function solution(numbers) {

//     numbers.sort((a, b) => '' + a + b > '' + b + a ? -1 : 1);
//     let result = numbers.reduce((acc, curr) => acc + curr, '');
//     console.log(result);
//     return result;

// }

// solution([0, 0, 0]);


// function solution(numbers) {
//     let answer = numbers.sort()
//     console.log(answer);
//     answer.reverse().join('');
//     console.log(answer);
//     return answer[0] === '0' ? '0' : answer;
// }

// solution([3, 30, 34, 5, 9]);


function solution(numbers) {
    let answer = numbers.map(v => v + "").sort((a, b) => (b + a) - (a + b))
    console.log(answer);
    console.log(answer.join(''));

    return answer[0] === '0' ? '0' : answer;
}
solution([3, 30, 34, 5, 9]);