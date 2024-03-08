/** @format */

class Nodes {
  element: number;
  next: Nodes | null;
  constructor(element: number) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  head: Nodes | null;
  size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element: number) {
    const node = new Nodes(element); // buat instance node
    let current: Nodes; //value saat ini

    if (this.head == null) {
      //apa bila head kosong, maka node akan menjadi value head
      this.head = node;
    } else {
      //apa bila head tidak kosong, cari sampai current.next= null
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      // pada saat current.next == null (false), maka node akan diletakan
      current.next = node;
    }
    this.size += 1;
  }

  printList() {
    let curr = this.head;
    while (curr) {
      console.log(curr.element);
      curr = curr.next;
    }
  }

  insertAt(element: number, index: number) {
    if (index < 0 || index > this.size) {
      return console.log("please enter a valid index");
    }
    //create new node
    const node = new Nodes(element); // { element : 5, next : null}
    let curr = this.head; // shallow copy curr menjadi pointer dari obj head

    //add the element to the 1st index
    if (index == 0) {
      //head  = {element : 1, next: null}
      node.next = this.head; // {element: 5 ,next : {element : 1, next: null}}
      this.head = node; //{element: 5 ,next : {element : 1, next: null}}
    } else {
      //node {element:5, next : null} => index 1
      curr = this.head; // {element : 2, next: {element: 3, next:null}}
      let prev: Nodes | null = null;

      //find position index to insert
      for (let i = 0; i < index; i++) {
        prev = curr; // {element : 2, next: {element: 3, next:null}}
        curr = curr!.next; // {element: 3, next:null}
      }
      console.log(prev, "ini prev");

      //adding new element
      prev!.next = node; // { element: 2, next : { element: 5, next : { {element: 3, next:null} }}}
      node.next = curr;
    }
    this.size += 1;
    return curr?.element;
  }

  removeAt(index: number) {
    if (index < 0 || index > this.size) {
      return console.log("please enter a valid index");
    }
    let curr = this.head; // {element: 2, next: {element:3 , next : null}}
    let prev = curr; // value saat ini juga

    //delete first element
    if (index === 0) {
      this.head = curr!.next; //{element:3 , next : null}
    } else {
      curr = this.head; // {element: 2, next: {element:3 , next : null}}

      for (let i = 0; i < index; i++) {
        prev = curr; // {element: 2, next: {element:3 , next : null}}
        curr = curr!.next; // next = next: {element:3 , next : null}
      }
      //remove element
      prev!.next = curr!.next;
      // {element2 ,next: null}
    }
    this.size -= 1;

    return curr?.element;
  }
}

const linkedList = new LinkedList();
linkedList.add(2);
linkedList.add(3);
console.log(linkedList.size, "size");

// linkedList.add(4);
linkedList.printList();

linkedList.insertAt(5, 1);

linkedList.removeAt(1);
// console.log(linkedList);
linkedList.printList();
