const { expect, it, describe } = require("@jest/globals");
const Stack = require("../../Data_Structures/stack");

describe("Stack", () => {
  it("should be able to take a value", () => {
    const myStack = new Stack();
    myStack.push(2);
    expect(myStack.stack).toHaveLength(1);
  });

  it("should be able to take more than one value", () => {
    const myStack = new Stack();
    myStack.push(2);
    myStack.push(5);
    myStack.push(9);
    expect(myStack.stack).toHaveLength(3);
  });

  it("should remove the last value when pop method is called", () => {
    const myStack = new Stack();
    myStack.push(2);
    myStack.push(8);
    myStack.push(5);
    myStack.push(9);
    myStack.pop();
    expect(myStack.stack).toHaveLength(3);
    expect(myStack.stack).toEqual(expect.not.arrayContaining(["9"]));
  });
});
