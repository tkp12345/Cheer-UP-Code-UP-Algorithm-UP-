// 첫째 줄에 N과 X가 주어진다. (1 ≤ N, X ≤ 10,000)

// 둘째 줄에 수열 A를 이루는 정수 N개가 주어진다. 주어지는 정수는 모두 1보다 크거나 같고, 10,000보다 작거나 같은 정수이다.

// let input = 26;
// let output =0;
// count =0; 
// while (input !== output){
//     let a =(input/10 + input%10)/10
//     let b = input % 10;
//     output=10*b + a
//     count++;  
// } 
// console.log(count);
  
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);

let cycle =0;
let temp = num;
let step =0;
let isNotSame = true;

while (isNotSame){ 
    cycle++; 

    if(temp < 10 ){ 
        step = temp % 10;
    }else{
        step = Math.floor(temp / 10) + (temp % 10); 
    }

    temp = (temp % 10).toString() + (step % 10).toString(); 
    temp = Number(temp); 

    if( temp === num) { 
         isNotSame =false;
    }
}

console.log(cycle);