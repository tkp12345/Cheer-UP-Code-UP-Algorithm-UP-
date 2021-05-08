const factorial = (매개변수)=>{
    if( 매개변수 <= 1){
        console.log(매개변수);
        return 1 ;
    }
    console.log(매개변수);
    return 매개변수 * factorial(매개변수 -1);
}

 

factorial(10)
 