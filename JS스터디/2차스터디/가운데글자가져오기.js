
function solution(s) {
  const arr = s.split("");
  // console.log("arr:", arr);
  let leng = arr.length;
  // console.log("leng:", leng);
  let i = parseInt(leng / 2);
  // console.log("i:", i);
  if (leng % 2 == 0) {
    console.log('답:',arr[i - 1], arr[i]);
  } else {
    console.log('답:',arr[i]);
  }
}

solution("abcde");

// const s ="abcde"
// const arr = s.split("");
// console.log(arr);

// function solution(s){
//     const leng = s.length;
//     if(leng%2==0){

//     }
// }
