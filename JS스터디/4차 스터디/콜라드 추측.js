// division 함수의 결과값 전역변수
let result;

// 2,3 나눠주는 함수 division
function division(num) {
  if (num % 2 === 0) {
    result = num / 2;
  } else {
    result = num * 3 + 1;
  }
  return result;
}

function solution(num) {
  let count = 0;
  result = num;
  while (result != 1 || count === -1) {
    division(result);
    count++;
    if (count > 499) {
      count = -1;
      break;
    }
  }
  return count;
}
