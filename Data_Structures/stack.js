class Stack {
  constructor() {
    this.stack = [];
  }

  push(data) {
    this.stack.push(data);
  }

  pop() {
    //pop takes no argument and automatically removes the top element
    this.stack.pop();
  }

  print() {
    //prints the stack content
    let str = "";
    for (let temp of this.stack) {
      str += temp + "\n";
    }
    return str;
  }
}

module.exports = Stack;
