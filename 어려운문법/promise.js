//비동기 해결책 "callback"

// const up = new Promise(
//     (resolve, reject) => {
//         setTimeout(() => {
//             let num = 10;
//             if (num > 9) {
//                 resolve(num);
//             } else {
//                 reject("error")
//             }
//         }, 1000);
//     }
// )

// up.then((item) => {
//     console.log('success', item);
// }, (err) => {
//     console.log(err);
// });

// console.log('by DAVE ')


/*
콜백지옥
*/

function func1(callback) {
    setTimeout(() => {
        console.log("1");
        setTimeout(() => {
            console.log("2");
            setTimeout(() => {
                callback();
            }, 500);
        }, 500);
    }, 500);
}

function func2() {
    console.log("3");
}

func1(func2);


const test = new Promise((resolve, reject) =>{
    
    setTimeout(() => {
        let num =10;
        if(num >=9){
            resolve(num);
        }else{
            reject("error");
        }
        
    }, 1000);

});

test.then(
    (num) => {
        console.log("yes!!!",num);
    },
    (err) => {
        console.log(err);
    }
)