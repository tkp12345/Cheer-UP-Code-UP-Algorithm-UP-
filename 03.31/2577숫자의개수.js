let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let multiply = 1 ;
    //세 개의 자연수
for (let i=0; i < 3; i++){
    //150 × 266 × 427
    multiply *= Number(input[i]);
}

// 17037300
let multiStr = String(multiply); 

//탐색한숫자 
let count = [0,0,0,0,0,0,0,0];

for ( let i =0; i<10; i++){

    // multiStr = 17037300
    //[Number(multiStr[i])] => 1 , 7 , 0 , 3 ...
    //
    countNum[Number(multiStr[i])] += 1;

    //countNum[ multiStr[0]] += 1 ; 
    //countNum[ multiStr[1]] += 1 ; 
    //countNum[ multiStr[2]] += 1 ; 
    //...
    //countNum[ multiStr[9]] += 1 ;
}

count.forEach(function(cur){
    console.log(cur);
})
