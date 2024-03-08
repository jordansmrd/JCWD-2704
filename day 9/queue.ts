/** @format */

class Queue {
  #container: number[] = [];

  enqueue(element: number) {
    this.#container.push(element);
  }

  dequeue() {
    this.#container.shift();
  }

  getElements() {
    return this.#container;
  }
}
const queue = new Queue();
queue.enqueue(1); // push element 1
queue.enqueue(2); // push element 2
console.log(queue.getElements()); // [1,2]
queue.dequeue(); //remove element 1
console.log(queue.getElements()); // [2]
