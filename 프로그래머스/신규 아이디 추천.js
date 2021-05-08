

// function solution(a ) {

//    let b= a.toLowerCase()
//     console.log(b)
// }

// let arr = "SDQFQW"
// solution(arr)


// /*
// 대문자 소문자 바꾸는방법 


// toUpperCase(); 

// */

/g
: 문자열 내의 모든 패턴을 찾는다.
정규 표현식은 매치되는 문자열을 찾으면 검색을 중단하지만, 
이 Flag를 사용하면 매치되는 모든 문자열을 찾는다.


^x
 :문자열의 시작을 표현하며 x 문자로 시작됨을 의미한다.

 
x$
 :문자열의 종료를 표현하며 x 문자로 종료됨을 의미한다.

 


2단계 알파벳 소문자 숫자 빼기 밑줄 마침표를 제외한 모든 문자를 제거하라.
* 알파벳 소문자 , 숫자, 언더스코어바 (_) 는 정규표현식에서 묶어 생각하면 된다.
new_id = new_id.toLowerCase()
         .replace(/[^\w\.\-]/g,'');

3단계 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표로 치환한다.
new_id = new_id.toLowerCase()
         .replace(/[^\w\.\-]/g,'')
         .replace(/[\.]{2,}/g,'.');

4단계 마침표(.)가 처음이나 끝에 위치한다면 제거한다.
new_id = new_id.toLowerCase()
         .replace(/[^\w\.\-]/g,'')
         .replace(/[\.]{2,}/g,'.')
         .replace(/^\./,'')
         .replace(/\.$/,'');




let arr = ['a', 'b', 'c'];
let a = arr.pop()
console.log(a)
console.log(arr.length)

 

while(arr.length < 4){
    arr.push(a);
}

console.log(arr);


a.replace(/[^\w\,\-]/g,'')

a.toLowerCase()

if(a.length>=16){
    a.slice(0,15)
}

if(a.length<=2){
    a.padEnd(3,a[a.length-1])
}