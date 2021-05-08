var regText = "   123   45 6   ";    // 문자열을 regText변수에 저장함
regText.replace(/ /gi, "");    // 모든 공백을 제거

console.log(regText);

/*-------------------------------------- */

let str1 = "  문자열의 모든 공백 제거하기    ";

console.log(str1.replace(/(\s*)/g, ""));