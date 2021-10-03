const { expect, it, describe } = require("@jest/globals");
const exp = require("constants");
const DoublyLinkedList = require("../../Data_Structures/doubly_linked_list");

describe("Doubly Linked List", () => {
  it("should have head and tail defined", () => {
    const myLinkedList = new DoublyLinkedList();
    expect(myLinkedList.head).toBeDefined();
    expect(myLinkedList.tail).toBeDefined();
  });
  it("should have head and tail set to null", () => {
    const myLinkedList = new DoublyLinkedList();
    expect(myLinkedList.head).toBeNull();
    expect(myLinkedList.tail).toBeNull();
  });
  it("should be able to add a node", () => {
    const myLinkedList = new DoublyLinkedList();
    myLinkedList.addNode(23);
    expect(myLinkedList.head).toEqual({
      data: 23,
      next: null,
      previous: null,
    });
  });
  it("should have the new node set as head and tail both", () => {
    const myLinkedList = new DoublyLinkedList();
    myLinkedList.addNode(23);
    expect(myLinkedList.head).toEqual({
      data: 23,
      next: null,
      previous: null,
    });
    expect(myLinkedList.tail).toEqual({
      data: 23,
      next: null,
      previous: null,
    });
  });
});
