// indexOf 는 array 안에서 값을 제일 먼저 찾은 위치입니다.
// filter는 array 내의 각 element 에 조건을 주어, true 값을
// return 한 element 만 모아서 새로운 array 를 만드는 것입니다.


// indexOf 는 찾은 값의 첫번째 원소의 위치를 반환해주며, 
// 없을경우 -1을 리턴합니다.

// includes 는 true / false 로 있다, 없다를 직관적으로 리턴해줍니다.
let array = ['0', 1, 2, '0', '0', 3]
console.log(array.indexOf(3));
//5