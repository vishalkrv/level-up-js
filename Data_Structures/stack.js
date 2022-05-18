/**
 * STACK follows last-in-first-out principle (LIFO)
 *          TIME Complexity                | Space Complexity
 * +--------------------+---------+-------+-------+
 * |        Type        | Average | Worst | Worst |
 * +--------------------+---------+-------+-------+
 * | Get,Search         | O(n)    | O(n)  | O(n)  |
 * | Insertion,Deletion | O(1)    | O(1)  | O(n)  |
 * +--------------------+---------+-------+-------+
 */
class Stack {
  constructor () {
    this.stack = []
  }

  push (data) {
    this.stack.push(data)
  }

  pop () {
    //pop takes no argument and automatically removes the top element
    this.stack.pop()
  }
  print () {
    let str = this.stack.reduce((prev, current) => prev + '' + current)
    return str
  }
}

module.exports = Stack
