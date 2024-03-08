/** @format */

class Stack {
  #maxSize: number;
  #container: number[] = [];

  constructor(maxSize = 10) {
    this.#maxSize = maxSize;
  }

  push(element: number) {
    if (this.#isFull()) return console.log("stack Overflow");

    this.#container.push(element);
  }
  pop() {
    if (this.#isEmpty()) return console.log("stack Underflow");

    this.#container.pop();
  }

  getElements() {
    return this.#container;
  }

  #isFull(): boolean {
    return this.#container.length >= this.#maxSize;
  }
  #isEmpty(): boolean {
    return this.#container.length === 0;
  }
}

const stack = new Stack(3);
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.getElements());
stack.push(4); //stack overflow
console.log(stack.getElements());
stack.pop();
stack.pop();
stack.pop();
console.log(stack.getElements()); //kosong
stack.pop(); //stack underflow
