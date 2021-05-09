// 5	[2, 1, 2, 6, 2, 4, 3, 3]	[3,4,2,1,5]
// 4	[4,4,4,4,4]	  [4,1,2,3]

// * 배열에 숫자를 ++1 카운트 해주려니 값이 설정안되있어서 
// [ <1 empty item>, NaN, NaN, <3 empty items>, NaN ] NaN 값이 할당됨 
//배열의 길이 와 원소를 동시에 선언하며 초기화하는방법 
//const N = 5;   // 길이 N을 5라고 가정
// let arr = new Array(N).fill(0);


//*실패율을 구하기위해 배열원소에 모조리 사용인원만큼 나누고 싶었다
// var arr = ["A","C","D","A","E","F","A"];  
//arr.splice(arr.indexOf("A"),1); // "A"를 찾아서 삭제한다.


//✔특정값 변경 
//arr.splice(arr.indexof("특정원소"),1,"변경할값")

//✔특정값 삭제 
//arr.splice(arr.indexof("특정원소"),1)
function solution(N, stages) {
    
    let answer = [];

    //이용자수 
    let users =stages.length 
    console.log('users:',users)
    //각 스테이지별 멈춰있는 수저장  배열
    let arr = new Array(N+1).fill(0);
    console.log(arr);
    //각 스테이지 실패율 저장 배열
    let fail = [];

    //사용자 스테이지별 멈춰있는 인원 파악
    stages.map(element=>{
        // console.log(element)
        for(let i =0; i<stages.length ; i++){
            if(i+1 == element){
                // console.log(element)
                 ++arr[i];
          }
         }
    });
  

    //만약 배열에 '0' 있다면 삭제한다
    arr.splice(arr.indexOf(0),1);
    console.log('arr',arr)
    // console.log('arr:',arr);

    //배열의 값을 복사합니다 
    let array =[]
     array =[...arr];
     console.log('array',array)
    for(let i =0; i<array.length; i++){
        array[i] = arr[i]/users
        users=users-arr[i]
        console.log(`${arr[i]}값일때 ${users}값`)
    }
    console.log('나눈arr값:',array);
    //나눈arr값: [ 0.125, 0.42857142857142855, 0.5, 0.5, 1 ]
    //❗ 문제발생  1/0 은 => 1 임 ... 
    array.splice(array.indexOf(1),1,0);
    console.log('1을제외한array값:',array);
    //1을제외한array값: [ 0.125, 0.42857142857142855, 0.5, 0.5, 0 ]
    //❗ 문제발생 결과값은 실패율값이아니라  단계값(인덱스 값(1,2,3..))을 배열로 리턴해야함 

    for (let n in array){
        console.log(n +":"+array[n]);
    }
    
    
// 5	[2, 1, 2, 6, 2, 4, 3, 3]	[3,4,2,1,5]
// 4	[4,4,4,4,4]	  [4,1,2,3]
 
    // return answer;
}



solution(5,[2, 1, 2, 6, 2, 4, 3, 3]);


