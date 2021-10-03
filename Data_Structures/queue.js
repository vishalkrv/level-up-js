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

module.exports = Queue
