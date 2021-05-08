/*
배열 사용 => 예제를 배열로 받으니까

빈배열 만들고 => 매겨변수로 받은배열두개 원소 하나하나 돌리기

arr = [[1,2],[2,3]];
console.log(arr.length); //2

new Array()란 ? 
*/

function solution(arr1, arr2) {
    let answer = [[]];
     //2.배열을 초기화해줌 : let answer = new Array();
    for(let i=0; i<arr1.length; i++){
         answer[i] = new Array();
        // answer[i] = [];
        for(let j=0; j<arr1[0].length; j++){

    answer[i][j] = arr1[i][j]+arr2[i][j];
    //1.에러가생김 : TypeError: Cannot set property '0' of undefined

        }
    }
    console.log(answer)
    return answer;
}

solution( [[1,2],[2,3]],[[3,4],[5,6]] );