arr = [[1,2],[2,3]];
console.log(arr.length); 

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
    
    console.log(`${i}${j}번쨰`,arr[i][j]);
    
    }
}

// 00번쨰 1
// 01번쨰 2
// 10번쨰 2
// 11번쨰 3