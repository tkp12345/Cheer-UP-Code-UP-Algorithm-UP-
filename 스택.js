/*
push X: 정수 X를 스택에 넣는 연산이다.
pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 스택에 들어있는 정수의 개수를 출력한다.
empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
 */

class Stack {
  constructor() {
    this.arr = [];
    this.index = 0;
  }

  push(item) {
    this.arr[this.index++] = item;
  }

  pop() {
    if (this.index <= 0) return -1;
    const result = this.arr[--this.index];
    return result;
  }
  size() {
    return this.arr.length;
  }
  empty() {
    if (this.index <= 0) return 1;
    else return 0;
  }
  top() {
    if (this.index <= 0) return -1;
    const result = this.arr[this.index];
    return result
  }
}
/*실행*/

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.arr);
console.log(stack.size());
console.log(stack.pop());
console.log(stack.top());
console.log(stack.empty());
