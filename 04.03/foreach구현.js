const myForEach = function(배열, 콜백함수){
    for(let i =0; i< 배열.length; i++){
        const element = 배열 [i];
        //배열 (0) 
       // 배열 (1)
       // 배열 (2)
       // 배열 (3)
        콜백함수(element, i,배열);
    }
}