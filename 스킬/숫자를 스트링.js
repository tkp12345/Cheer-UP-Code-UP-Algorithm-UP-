
//숫자를 스트링으로 

let tt = 2
tt += "";
console.log(typeof tt);

//스트링을 숫자로 
tt="2"
tt *=1;
console.log(typeof tt);

//숫자타입에 문자열을 더하면 결과가 문자열이
// 되고 문자열에 숫자를 곱하면 숫자타입이 되는
// 특성을 이용해서 결과는 달라지지 않게 
//타입만 변환되도록 한 것입니다.


// 숫자를 스트링로 바꾸기
var tt = 2
alert(typeof tt);    // Result : number
tt = String(tt);
alert(typeof tt);    // Result : string

// 스트링을 숫자로 바꾸기
tt = "2"
alert(typeof tt);    // Result : string
tt = Number(tt);
alert(typeof tt);    // Result : number