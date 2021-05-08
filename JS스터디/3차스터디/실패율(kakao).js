/*
신규 사용자와 
기존 사용자 
스테이지 차이

=>동적으로 게임 시간을 늘려 난이도 조절

*실패율:
     스테이지도달 클리어못한 사람 / 스테이지도달 한사람 

    N  : 전체 스테이지의 개수
stages : 현재 멈춰있는 스테이지의 번호가 담긴 배열 


*stages 매개변수로 주어질시 
   실패율이 높은 스테이지부터 (result)
  내림차순 으로 => sort() 사용
  리턴


ex)
N	    stages                  	result
5	    [2, 1, 2, 6, 2, 4, 3, 3]	[3,4,2,1,5]
-----------------------------------------------------
매개변수  N , stages 

  result.length === N 
  stages.length === 전체사람 
-----------------------------------------------------
알고리즘:

  각각 멈춰있는 스테이지 에 대한 인원을 카운트 하기위한
  새로운 배열 생성  => [1단계멈춰있는 , 2단계멈춰있는, .... , N단계멈춰있는]
  stages 배열 원소 하나하나를  돌면서 멈춰있는 스테이지를 카운트하여
  새로운 배열에 집어넌다
  
  새로운 배열 원소에따라 내림차순으로 정렬하여 리턴한다 

  삽질 1 => 도달한 사람에대한  실패를 조사 

  ```
  function solution(N, stages) {
    // var answer = []; 에러남  N 에따라 0으로 원소초기화
    var answer =new Array(N+1).fill(0);
    // var answer =Array(N).fill(0);

    for(let i=0; i<stages.length; i++){
        answer[stages[i]-1] += 1;
        console.log(`${i}번째answer:`,answer);
    }
    console.log(answer);

    return answer;
    }
```

*/

function solution(N, stages) {
    // var answer = []; 에러남  N 에따라 0으로 원소초기화
    let user =new Array(N+1).fill(0);
    // var answer =Array(N).fill(0);
    //user : 각stage 실패인원 

    let fail =new Array(N+1).fill(0);
    // fail : 실패율  

    let allStage =stages.length

    // stages.length : 전체사람 
    for(let i=0; i<stages.length; i++){
        user[stages[i]+1] += 1;
        console.log(`${i}번째answer:`,answer);
    }

    // N : 전체 스테이지의 개수
    //각스테이지 실패율을 계산
    for(let i=0; i<N; i++){
        fail[i] = user[i]/allStage;
    }
    console.log(answer);

    return answer;
}

solution(5,[2, 1, 2, 6, 2, 4, 3, 3]);