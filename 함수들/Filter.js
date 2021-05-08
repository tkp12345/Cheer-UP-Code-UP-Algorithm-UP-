// indexOf 는 array 안에서 값을 제일 먼저 찾은 위치입니다.
// filter는 array 내의 각 element 에 조건을 주어, true 값을 return 한 element 만 모아서 새로운 array 를 만드는 것입니다.
// 반대로 중복값만 가져올 수도 있습니다.


//filter() 함수는 인자로 제공되는 함수에 의해 test 를 통과한 모든 요소를 
//새로운 array 로 만든다.
let users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
  ];

  let res = users.filter(it => it.name.includes('Oli'));
  console.log(res);
 const array = ['0', 1, 2, '0', '0', 3];
 
