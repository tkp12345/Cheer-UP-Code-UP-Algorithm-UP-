
// N = 17037300
// // console.log( N(0) );
// N = String(N)
 
// let count =0;
// let arr =[0,0,0,0,0,0,0,0]
 
// for(let i=0; i<arr.length; i++){
  
//     for(let j=0; j<N.length; j++){
//         console.log(`arr[${i}] 랑 arr[${j}]`)
//         if(arr[i] === N[j]){
//         console.log(`i: ${i} j: ${j} 번째`)
//         count++;
       
//         }
//     }
//     arr[i]=count; 
// }

// console.log(arr);



// ///////


// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

//  // num = 17037300
// let num = String(input[0] * input[1] * input[2]);

// for (let i = 0; i<=9; i++)
//  let count =0; 
//     for ( let j =0; j<num.length; j++){
//         //Number(num[j]) => 1 , 7 , 0 , 3 , 7...
//         //Number(num[0]) 1=== 0
//         //Number(num[1]) 7=== 0
//         //Number(num[2]) 0=== 0
//         //Number(num[3]) 3=== 0

//         //Number(num[0]) 1=== 1
//         //Number(num[1]) 7=== 1
//         //Number(num[2]) 0=== 1
//         //Number(num[3]) 3=== 1
        
//          //Number(num[0]) 1===2
//         //Number(num[1]) 7=== 2
//         //Number(num[2]) 0=== 2
//         //Number(num[3]) 3=== 2

//         if(Number(num[j]) === i){
//             count ++ ;
//         }
//         console.log(count); 
//     }


//   let   number =String(17037300)
// //1~9 
//     for(let  i=0; i<9; i++ ){ 
//         let count =0;
//         for( let j=0; j<number.length; j++){
//          if(number[j] === i ){
//              count ++
//          }
//         }
//         console.log(`${i}번째 : ${count}`)

//     }

let num = String(17037300);

for (let i = 0; i <= 9; i++) { 
    console.log (num.split(i+ ''));
    // console.log(num.split(i + '').length - 1);    
 }