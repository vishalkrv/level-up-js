const { expect, it, describe } = require('@jest/globals')
const Stack = require('../../Data_Structures/stack')

describe('Stack', () => {
  it('should be able to take a value', () => {
    const myStack = new Stack()
    myStack.push(2)
    expect(myStack.print()).toEqual('2')
  })

  it('should be able to take more than one value', () => {
    const myStack = new Stack()
    myStack.push(2)
    myStack.push(5)
    myStack.push(9)
    expect(myStack.print()).toEqual('259')
  })

  it('should remove the last value when pop method is called', () => {
    const myStack = new Stack()
    myStack.push(2)
    myStack.push(8)
    myStack.push(5)
    myStack.push(9)
    myStack.pop()
    expect(myStack.print()).toEqual('285')
  })

  it('should print 1234', () => {
    const myStack = new Stack()
    myStack.push(1)
    myStack.push(2)
    myStack.push(3)
    myStack.push(4)
    expect(myStack.print()).toEqual('1234')
  })
})
