class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(data) {
    this.queue.push(data);
  }
  dequeue(data) {
    //does not need an argument because it deletes the elements that was inserted first
    return this.queue.shift();
  }
  print() {
    let str = "";
    for (let temp of this.queue) {
      str += temp + "\n";
    }
    return str;
  }
}

//create an object of type queue
let myQueue = new Queue();

//insert items into the queue
myQueue.enqueue(3);
myQueue.enqueue(9);
myQueue.enqueue(4);
myQueue.enqueue(2);

console.log("Your queue is:\n" + myQueue.print());

myQueue.dequeue(); //FIFO - First In First Out Principle

console.log("After dequeue\n");

console.log("Your queue is:\n" + myQueue.print());
