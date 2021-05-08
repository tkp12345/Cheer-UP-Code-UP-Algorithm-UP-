function solution(s) {
    if(s.length ==4 || s.length==6);
       let array= s.split('');
       for(let i=0; i<array.length; i++){
            if(isNaN(array[i])===false){
            }else{
                return false;
                break;
            }
        }
       return true; 
}

solution('a234');