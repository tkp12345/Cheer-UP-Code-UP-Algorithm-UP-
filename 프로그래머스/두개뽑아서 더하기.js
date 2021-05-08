// function solution(numbers) {
//   var answer = [];
//   var array = [];
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j =0; j < numbers.length; j++) {
//       if (i !== j) {
//         array.push(numbers[i] + numbers[j]);
//     }
// }
// }

// // console.log(array);

// answer = [...new Set(array)].sort((a, b) => a - b);

// console.log(answer);
// return answer;
// }

// solution([2,12,5,2,1])



function solution(numbers){
   let array=[];
   let answer= [];
   for( let i=0; i<numbers.length; i++){
     for(let j=0; j<numbers.length; j++){
       if(i !=j)
       array.push(numbers[i]+numbers[j]);
     }
    
   }
   const set =Array.from(new Set(array));
   set.sort((a,b)=>a-b);
   console.log(set)
   return set;
}

solution([2,1,3,4,1])