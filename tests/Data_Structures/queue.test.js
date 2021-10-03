const { expect, it, describe } = require("@jest/globals");
const Queue = require("../../Data_Structures/queue");

describe("Queue", () => {
  it("should be able to take a value", () => {
    const myQueue = new Queue();
    myQueue.enqueue(2);
    expect(myQueue.queue).toHaveLength(1);
  });

  it("should be able to take more than one value", () => {
    const myQueue = new Queue();
    myQueue.enqueue(2);
    myQueue.enqueue(5);
    myQueue.enqueue(9);
    expect(myQueue.queue).toHaveLength(3);
  });

  it("should remove the first value when dequeue method is called", () => {
    const myQueue = new Queue();
    myQueue.enqueue(2);
    myQueue.enqueue(8);
    myQueue.enqueue(5);
    myQueue.enqueue(9);
    myQueue.dequeue();
    expect(myQueue.queue).toHaveLength(3);
    expect(myQueue.queue).toEqual(expect.not.arrayContaining(["2"]));
  });
});
