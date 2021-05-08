https://velog.io/@teihong93/Array.from%EC%9D%84-%ED%86%B5%ED%95%9C-%EB%B0%B0%EC%97%B4%EC%9D%98-%EC%B4%88%EA%B8%B0%ED%99%94

let a =Array.from('Park');
console.log(a) //[ 'P', 'a', 'r', 'k' ]

Array.from([1, 2, 3], x => x + x);
//[2, 4, 6]


Array.from() 메소드
ECMAScript 6부터 추가된 Array.from() 메소드는 다음 객체들을 배열처럼 변환시켜 줍니다.

 

1. 배열과 비슷한 객체(array-like objects) : length 프로퍼티와 인덱스 된 요소를 가지고 있는 객체

2. 반복할 수 있는 객체(iterable objects) : Map과 Set 객체 및 문자열과 같이 해당 요소를 개별적으로 선택할 수 있는 객체

 

하지만 이렇게 생성된 객체는 정확히 말하면 Array 객체는 아니며, Array 객체의 자식 클래스(child class)입니다.