// console.log("안녕하세요");
// setTimeout(() => {
//     console.log('dave lee 입니다')
// }, 3000);

// console.log('잔재미 코딩입니다.');


// 콜백함수
function func1(callback) {
    setTimeout(() => {
        console.log("func1");
        callback();
    }, 1000);
}

function func2() {
    console.log("func2");
}

func1(func2);