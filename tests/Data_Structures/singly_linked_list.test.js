const { expect, it, describe } = require("@jest/globals");
const exp = require("constants");
const LinkedList = require("../../Data_Structures/singly_linked_list");

describe("Linked List", () => {
  it("should have head and tail defined", () => {
    const myLinkedList = new LinkedList();
    expect(myLinkedList.head).toBeDefined();
    expect(myLinkedList.tail).toBeDefined();
  });
  it("should have head and tail set to null", () => {
    const myLinkedList = new LinkedList();
    expect(myLinkedList.head).toBeNull();
    expect(myLinkedList.tail).toBeNull();
  });
  it("should be able to add a node", () => {
    const myLinkedList = new LinkedList();
    myLinkedList.addNode(23);
    expect(myLinkedList.head).toEqual({
      data: 23,
      next: null,
    });
  });
  it("should have the new node set as head and tail both", () => {
    const myLinkedList = new LinkedList();
    myLinkedList.addNode(23);
    expect(myLinkedList.head).toEqual({
      data: 23,
      next: null,
    });
    expect(myLinkedList.tail).toEqual({
      data: 23,
      next: null,
    });
  });
  it("should have next property set to new node when there is more than one node", () => {
    const myLinkedList = new LinkedList();
    myLinkedList.addNode(23);
    myLinkedList.addNode(24);
    myLinkedList.addNode(25);
    expect(myLinkedList.head).toEqual({
      data: 23,
      next: {
        data: 24,
        next: {
          data: 25,
          next: null,
        },
      },
    });
  });
  it("should have tail set to newly added node", () => {
    const myLinkedList = new LinkedList();
    myLinkedList.addNode(23);
    myLinkedList.addNode(24);
    myLinkedList.addNode(25);
    expect(myLinkedList.tail).toEqual({
      data: 25,
      next: null,
    });
  });
  it("should insert data after a given node", () => {
    const myLinkedList = new LinkedList();
    myLinkedList.addNode(23);
    myLinkedList.addNode(24);
    myLinkedList.addNode(25);
    myLinkedList.insertAfter(45, 24);
    expect(myLinkedList.head).toEqual({
      data: 23,
      next: {
        data: 24,
        next: {
          data: 45,
          next: {
            data: 25,
            next: null,
          },
        },
      },
    });
  });
  it("should remove selected node", () => {
    const myLinkedList = new LinkedList();
    myLinkedList.addNode(23);
    myLinkedList.addNode(24);
    myLinkedList.addNode(25);
    myLinkedList.insertAfter(45, 24);
    myLinkedList.removeNode(24);
    expect(myLinkedList.head).toEqual({
      data: 23,
      next: {
        data: 45,
        next: {
          data: 25,
          next: null,
        },
      },
    });
  });
});
