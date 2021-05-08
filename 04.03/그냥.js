let 배열 = [2,3,4,5,6]

// 배열 = 배열.filter( (value,index)=>{
//     return value % 2 == 0 ;
// });

배열 = 배열.map( function(value,index){
    return value + '!!';
});

console.log(배열);

 