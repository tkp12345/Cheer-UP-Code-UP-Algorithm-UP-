// 1.받은배열 원소하나꺼내서
// 2.배열자른다
// 3.자른배열 원소선택
// 3.새로운 배열원소에 자른
// 4.오름차순정렬

function solution(array, commands) {
  let answer = [];

  // 자바의 for : 문
  //forEach 돌면서 element 원소 개수만큼 반복하고 원소를 하나씩을 꺼낸다
  // [2, 5, 3]  ,    [4, 4, 1]  ,    [1, 7, 3]
  commands.forEach((element) => {
    //배열 을 자른다
    let arr = array.slice(element[0] - 1, element[1]);

    //오름차순정렬
    arr.sort((a, b) => a - b);

    //push 는 배열에 원소를 추가하는것
    answer.push(arr[element[2] - 1]);
  });
  return answer;
}

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);


// function solution(array, commands) {
//     let answer = [];
//     commands.forEach((element) => {
//       let arr = array.slice(element[0] - 1, element[1]);
//       arr.sort((a, b) => a - b);
//       answer.push(arr[element[2] - 1]);
//     });
//     return answer;
//   }
  