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
    //does not need an argument because it deletes the elements that was inserted first
    return this.queue.shift()
  }
  print () {
    let str = this.queue.reduce((prev, current) => prev + '' + current)
    return str
  }
}

module.exports = Queue
