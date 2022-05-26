const { expect, it, describe } = require("@jest/globals");
const Queue = require("../../Data_Structures/queue");

describe("Queue", () => {
  it("should be able to take a value", () => {
    const myQueue = new Queue();
    myQueue.enqueue(2);
    expect(myQueue.print()).toEqual("2");
  });

  it("should be able to take more than one value", () => {
    const myQueue = new Queue();
    myQueue.enqueue(2);
    myQueue.enqueue(5);
    myQueue.enqueue(9);
    expect(myQueue.print()).toEqual("259");
  });

  it("should remove the first value when dequeue method is called", () => {
    const myQueue = new Queue();
    myQueue.enqueue(2);
    myQueue.enqueue(8);
    myQueue.enqueue(5);
    myQueue.enqueue(9);
    myQueue.dequeue();
    expect(myQueue.print()).toEqual("859");
  });

  it("should print 1234", () => {
    const myQueue = new Queue();
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    myQueue.enqueue(4);
    expect(myQueue.print()).toEqual("1234");
  });

});
