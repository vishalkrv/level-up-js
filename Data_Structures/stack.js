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

let myStack = new Stack(); //create item of type stack
//push elements to a stack
myStack.push(2);
myStack.push(3);
myStack.push(9);
myStack.push(1);

//print stack
console.log("Your stack is:\n" + myStack.print());

myStack.pop(); //LIFO - Last In First Out Principle

console.log("After pop\n");

console.log("Your stack is:\n" + myStack.print());
