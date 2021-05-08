/*
삭제

splice ( 삭제 시작 인덱스 , 몇개?)

pop 배열의 끝에 있는 아이템 리턴 해당 아이템배열 삭제 
 */

// const arr = [1, 2, 3, 4];
// let data = arr.pop()
// console.log(data);
// console.log(arr);

/*
반환 

slice (a,b):
   a 부터시작 , b-1 까지 

*/

// let array = [1, 2, 3, "dave"];
// let array2 = array.slice(0, 1);
// console.log(array2);
// console.clear()


/*

for Each 
 간단히 배열 아이템 가져옴 
*/

// const data3 = [1, 2, 3, 4];

// data3.forEach(item => {
//     console.log(item);
// })

/*
합치기

concat

 배열. concat(붙일배열);
*/

/*
껴넣기 

join

join(*)
*/
// console.clear()

// const arr = [1, 2, 3, 4];
// let data = arr.join("*");
// console.log(data);

/*
찾기 

findIndex 
(번호리턴)

find
(객체리턴)
*/

const myarray = [{
        id: 1,
        name: 'davide'

    },
    {
        id: 2,
        name: 'alex'
    }
];

console.log(myarray.indexOf('alex')); //없다! 객체안쪽 데이터 
console.log(myarray.findIndex(item => item.name === 'alex'));
console.log(myarray.find(item => item.name === 'alex'));

/*
조건검색 

filter

배열.filter ( 원소 => 원소 *+/ 조건);
*/

let MyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = MyArray.filter(a => a % 2 === 0);
console.log(even);