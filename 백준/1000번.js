// const fs = require('fs')
// const inputData = fs.readFileSync('/dev/stdin').toString().split(' ').map(value => +value)

// const[a,b] =inputData
// console.log(a+b);


// let input = require('fs').readFileSync('dev/stdin').toString().split('');

// const num1 = Number(input[0]);
// const num2 = Number(input[1]);

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(Math.floor(num / num2));
// console.log(num1 % num2);


// let input = require('fs').readFileSync('/dev/stdin').toString();

// let N = Number(input[0]);

// 첫째 줄에 두 정수 H와 M이 주어진다
// 24시간 표현에서 하루의 시작은 0:0(자정)이고, 끝은 23:59(다음날 자정 1분 전)이다

 
//  for (let i=1; i <10;i++){
// console.log(`${N}*${i}=${N*i}`)
//  }


input: process.stdin,
output: process.stdout
});

let input = [];
rl.on('line', function (line) {
input.push(parseInt(line));
}).on('close', function () {
const m = input[0];
const n = input[1];
 
 if (m<0 && n>0){
    console.log("1");
 }else if ( m>0  && n>0 ){
    console.log("2");
 }else if ( m>0 && n<0 ){
    console.log("3");
 }else ( m<0 && n<0 ){
    console.log("4");
 }