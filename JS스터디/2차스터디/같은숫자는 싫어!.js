/*
[문제] 
 배열 -> 중복제거 -> 순서나열
[알고리즘]
 중복제거 -> Set 
 순서나열 -> sort()

 *  Set 객체 :
    map함수는 callbackFunction을 실행한 결과를 가지고 새로운 배열을 만들 때 사용한다.
  
    const A = [1, 2, 3, 1, 2];

    const set = new Set(A);
     => [ 1, 2, 3 ]

 * sort():

    쉽게 정렬 알고리즘을 설명하면 이렇습니다.

    (a,b) 형식으로 지정한 두 인자를 차례로 비교합니다.

    우선 배열 numbers[0]과 numbers[1] 즉, 20과 10을 비교해 볼까요?
    20-10 = 10
    결과값이 10 즉, 양수입니다.
    sort함수에 sortNumber(a,b)의 return 값으로 양수 10을 전달합니다.
    그럼 sort함수가 양수값을 전달받고 배열의 순서를 바꾸어 버립니다.
    (정확하게 말하면 두 배열 안에 든 값을 교체)
    그럼 배열이 [10, 20, 9,8,7,6,5,4,3,2,1] 이렇게 바뀝니다.

[문제] 
 배열 -> 옆에 중복제거 -> 순서나열
[알고리즘]
 for 문으로 하나하나 원소비교 새로운 배열만들어 대입 push 
*/



function solution(arr) {
    let result = [];
    for(let i=0; i<=arr.length; i++){
        if(arr[i] !== arr[i+1]){
            result.push(arr[i]);
            console.log('i값은?',arr[i],arr[i+1] )
            console.log('i?',arr)
            
             
            
        }
    }
    console.log(result);
    console.log(result.length);
}

solution([1,1,3,3,0,1,2])