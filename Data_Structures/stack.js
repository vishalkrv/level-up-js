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
    this.list = []
  }

  push (data) {
    this.list.push(data)
  }

  isEmpty () {
    return this.list.length === 0
  }

  pop () {
    if (this.isEmpty()) throw new Error('Empty Stack')
    //pop takes no argument and automatically removes the top element
    return this.list.pop()
  }

  peek () {
    if (this.isEmpty()) throw new Error('Empty Stack')
    return this.list[this.list.length - 1]
  }

  print () {
    let str = this.list.reduce((prev, current) => prev + '' + current)
    return str.toString() // cast toString() implemented in case single value is returned
  }
}

module.exports = Stack
