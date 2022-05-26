/**
 * QUEUE follows first-in-first-out principle (FIFO)
 *          TIME Complexity                | Space Complexity
 * +---------------------+---------+-------+-------+
 * |        Type         | Average | Worst | Worst |
 * +---------------------+---------+-------+-------+
 * | Get,Search,Deletion | O(n)    | O(n)  | O(n)  |
 * | Insertion           | O(1)    | O(1)  | O(n)  |
 * +---------------------+---------+-------+-------+
 */
class Queue {
  constructor () {
    this.queue = []
  }
  enqueue (data) {
    this.queue.push(data)
  }
  dequeue (data) {
    if(this.isEmpty()) throw "Queue is empty";
    //does not need an argument because it deletes the elements that was inserted first
    return this.queue.shift()
  }
  isEmpty () {
    return this.queue.length === 0
  }

  front () {
    return this.queue[0]
  }
  print () {
    let str = this.queue.reduce((prev, current) => prev + '' + current)
    return str.toString() // cast toString() implemented in case single value is returned
  }
}

module.exports = Queue
