function Node (data) {
  // By default, the new node’s next value is null, and its data is equal
  // to the data we pass as an argument.
  this.data = data
  this.next = null
}

class SinglyLinkedList {
  constructor () {
    // If the list doesn’t have any nodes, both the head (the first node in the list) and
    // the tail (the last node in the list) don’t exist, so their values are equal to null.
    this.head = null
    this.tail = null
  }

  // function to add a node to the tail
  addNode (data) {
    const node = new Node(data)
    if (!this.head) {
      // If there is no head in the list, meaning that there are no nodes at all in the list,
      // the new node is both the head and the tail.
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
  }

  // The insertAfter function receives two arguments: the data for the new node,
  // and the data of the node after which we want to add the new node.
  // As we start traversing the list again, we set the default value of the
  // currently checked node to the head. While there is a head, meaning that the list isn’t empty,
  // we can start walking through the list. If the data of the currently checked node
  // equals the data of the node we wanted to find, in order to add a new node after this node,
  // we create the new node with the data we passed as an argument.
  // If the currently checked node is the tail of the list,
  // meaning that we’re just adding a new node to the end of the list,
  // the tail’s next value is equal to the new node, and now the new node equals the tail.
  // Else, the new node’s next value equals the currently checked node’s next value.
  insertAfter (data, toNodeData) {
    let current = this.head
    while (current) {
      if (current.data === toNodeData) {
        const node = new Node(data)
        if (current === this.tail) {
          this.tail.next = node
          this.tail = node
        } else {
          node.next = current.next
          current.next = node
          break
        }
      }
      current = current.next
    }
  }

  // There are two variables, previous and current.
  // current represents the currently checked node,
  // previous represents the currently checked node’s previous node.
  // To find the node we want to remove, we always start from the beginning of the list, the head.
  // The values of the previous and current variables are now equal to the head.
  // If there’s a current value, meaning that the list consists of at least one node,
  // we start to traverse the list.
  // If the currently checked node’s data is equal to the data we want to delete,
  // we found the right node! Now, we need to check where this node is placed.
  // Let’s say that we want to remove the node with the data equal to 9.
  // We find the node, and set the previous node’s next value equal to the next node.

  // If the node we want to delete is the head of the list, we set the current head’s node next value equal to this.head.

  removeNode (data) {
    let previous = this.head
    let current = this.head
    while (current) {
      if (current.data === data) {
        if (current === this.tail) {
          if (!this.head) {
            this.tail = null
          } else {
            this.tail = previous
          }
        }
        if (current === this.head) {
          this.head = this.head.next
        }
        previous.next = current.next
      } else {
        previous = current
      }
      current = current.next
    }
  }
}

/**
 * A singly linked list is a linear data structure.
 * Each element, called a node, is connected to the other,
 * by pointers (or references) to the next node.
 */
module.exports = SinglyLinkedList
