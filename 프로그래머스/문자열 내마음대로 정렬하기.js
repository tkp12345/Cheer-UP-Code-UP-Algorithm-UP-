/*인덱스 n번째 글자를 기준으로 오름차순정렬  */

// function solution(strings, n) {
//   let arr = [];
//   let object = {};
//   let leng = strings.length;
//   //console.log(leng);
//   for (let i = 0; i < leng; i++) {
//     // console.log(strings[i].charAt(n - 1));
//     arr[i] = strings[i].charAt(n - 1) + i;
//   }
//   //  console.log(arr);
//   let arrv = arr.sort();
// //   console.log(arrv);
// //   console.log(arrv[0]);
// //   console.log(arrv[0].slice(1, 2))
//   for (let j = 0; j <leng; j++) {
//     console.log(strings[arr[j].slice(1, 2)]);
//   }
// }

// solution(["sun", "bed", "car"], 1);

function solution(string, n){
    let answer=[];
    let arr;

    for(let i=0; i<string.length; i++){
        select =string[i][n];
        string[i]= select + string[i];
    }

    string.sort(); 
  

    for(let j=0; j<string.length; j++){
        answer[j]=string[j].replace(string[j][0],"");

    }
    console.log(answer);
    return answer;
}

/*-----------------*/
// function solution(strings, n) {
//     var answer = [];
//     for (var i = 0; i < strings.length; i++) {
//         var chu = strings[i][n];
//         strings[i] = chu + strings[i];
//         console.log(strings[i]);
//     }
//     strings.sort();
//     for (var j = 0; j < strings.length; j++) {
//         strings[j] = strings[j].replace(strings[j][0],"");
//         answer.push(strings[j])
//     }
//     return answer;
// }

solution(["sun", "bed", "car"],1);


/*객체로풀기 */

function solution(strings, n) {
    var answer = [];
    var indexList = [];
    // strings.forEach(function(value,index){
    //     indexList.push({compare:value[n], value: value});
    // });

    /*
    {index: 0, compare:u, value: sun}
    {index: 1, compare:e, value: bed}
    {index: 2, compare:a, value: car}
    */
//     indexList.sort(function(a,b){
//         if (a.compare > b.compare) return 1;
//         if (b.compare > a.compare) return -1;

//         if(a.value > b.value) return 1;
//         if(b.value > a.value) return -1;
//         return 0;
//     });
    /*
    {index: 2, compare:a, value: car}
    {index: 1, compare:e, value: bed}
    {index: 0, compare:u, value: sun}
    */

    strings.sort(function(a,b){
        if(a[n] > b[n]) return 1;
        if(b[n] > a[n]) return -1;

        if(a > b) return 1;
        if(b > a) return -1;

        return 0;
    });

    // indexList.forEach(function(value){
    //     answer.push(value.value);
    // });
    return strings;
}