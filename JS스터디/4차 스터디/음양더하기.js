function solution(absolutes, signs) {
  let result = [];
  for (let i = 0; i < absolutes.length; i++) {
    signs[i] === false
      ? (result[i] = absolutes[i] * -1)
      : (result[i] = absolutes[i]);
  }
  //reduce 써보기
  let sum = result.reduce((a, b) => a + b, 0);
  return sum;
}
