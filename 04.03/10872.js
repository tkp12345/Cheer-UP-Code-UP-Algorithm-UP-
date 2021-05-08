// 0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.

let n = 5;
let sum =0;
if (n === 0) {
  n++;
}
  for (let i = n; i > 0; i--) {
    sum += i;
    console.log(`${i}일때 : ${sum}`)
  }
  console.log(`  ${sum}`)
 
