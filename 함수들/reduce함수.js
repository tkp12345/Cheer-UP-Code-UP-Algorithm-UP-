//map 이 배열의 각 요소를 반영 한다면 
//reduce는 배열 자체를 변형합니다 
//reduce  라는 이름은 이메서드가 보통 배열을 값 하나로 줄이는 
// 리듀서 함수는 네 개의 인자를 가집니다.

// 누산기accumulator (acc)
// 현재 값 (cur)
// 현재 인덱스 (idx)
// 원본 배열 (src)

const animal = [ 
    { name: 'monkey', size: 'medium', weight: 7},
    { name: 'cat', size: 'medium', weight: 5},
    { name: 'lion', size: 'small', weight: 23},
    { name: 'mouse', size: 'medium', weight: 33},
    { name: 'dog', size: 'big', weight: 4},
    
];

// for(let animal of animal){
//     console.log(animal);
// }

// animal.forEach(function(animal ,index){
//     console.log(animal.size, index);
// })

//****배열안의 값들의 합을 구할때 주로 이용합니다  */

//acc 더해진값 
//cur 현재값 

// const numbers = [1, 10, 11, 23, 444];

// const total = numbers.reduce(function(acc,cur){
//     console.log(acc,cur);
//     return acc + cur;
// });

// console.log(total);

// //각동물들의 몸무게 

// const 몸무게 = animal.reduce(function(acc,cur){
//     return acc + cur.weight
// })

// //0으로 초기화를 시켜줘야함 
// const 몸무게 = animal.reduce(function(acc,cur){
//     return acc + cur.weight
// },0)

// console.log(몸무게)


const name = ['홍길동','홍길동','김영희','김영희','바둑이','김영희','바둑이'];

const result = name.reduce( (object, currentValue ) => {
   
    console.log(object[, ]currentValue);
},{})



