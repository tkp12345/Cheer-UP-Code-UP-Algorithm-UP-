// Array.from()을 통해 buttons를 array로 반환을 하고 array로 사용할 수 있게끔 만들어줘서 정상적으로 사용할 수 있게 되었습니다.
// Array.from()은 생각보다 유용합니다. html을 작업할 때 array를 얻지 못할 경우가 생길 수 있습니다.
// 방금처럼 array-like object를 얻기 때문입니다.
// 유사 배열의 개념을 제대로 알지 못하면 힘들게 작업을 할 수 있습니다.
// 그러므로 모두 Array.from()을 통해 빠르게 코딩을 해봅시다!

const buttons = document.getElementsByClassName("btn");
const arrayfr = Array.from(buttons);

arrayfr.forEach(button => {
	button.addEventListener("click", () => console.log("클릭"))
});