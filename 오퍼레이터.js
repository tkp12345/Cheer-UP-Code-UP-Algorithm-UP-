// // or 연산시 심플한 연산을 앞에다 둔다 왜 ? 
// // or 은 true 보이면 종료 

// const value1 = true; 
// const value2 = 4<2;

// //함수를 제일뒤에둔다 
// console.log (`or: ${value1 || value2 || check()}`);


// function check(){ 
//     for( let i=0; i<10; i++){
//         console.log('d');
//     }
//     return true;
// }


// const a = { name: 'aa'};
// const a2 ={ name: 'aa'};
// const a3 = a;
// console.log(a == a2);
// console.log(a === a2);
// console.log(a === a3);

// console.log(0 == false);
// console.log(0 === false);
// console.log('' == false);
// console.log('' === false);
// console.log(null == undefined);
// console.log(null ===  undefined);

for(let i=0; i<10; i++){
    if(i%2!==0){
    continue;
    }
    console.log(`${i}`);
}


//Early return, early exit 
function upgraeUser(user){
    if(user.point <= 10){
        return;
    }
    //long upgrade logic...
}

const simplePring = function(){
    console.log('simplePring!!');
};

const simplePring = () => console.log('simplePrint!');
const add =(a,b)=>a+b;

//iife  즉시실행함수 

(function hello(){
    console.log('f');
})();
