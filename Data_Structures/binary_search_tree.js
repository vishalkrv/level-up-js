//Every node has a node on its left side, the node smaller than the current node’s value,
// and on its right side, the node bigger than the current node’s value.
function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

//The tree is a class, which constructor contains the value of the root node.
class BinarySearchTree {
  // By default, the root’s value is equal to null: there are no nodes in the tree until we add them!
  constructor() {
    this.root = null;
  }
  // If there is no root in the tree, meaning that there are no nodes at all,
  // the new node is the new root. Otherwise, if the root is already present,
  // we invoke the insertNode function that receives two arguments: the root,
  // as we need to check all values in the tree later on, and the new node.

  addNode(data) {
    const newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  // Check if the currently checked node’s data is lower or higher than the new node’s data.
  // If it’s lower, meaning we go left, we first check if there is a value already.
  // If there isn’t, the currently checked node’s left value is equal to the new node.
  // Otherwise, we invoke the insertNode function again,
  // to keep on walking through the tree until we find the right value.
  // The node’s left node is now passed as the first argument,
  // and we check again whether it’s value is lower or higher than the new node’s value.
  // This keeps on going, until we find the place for the new node. The same goes for the right values,
  // but the other way around!
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  remove(data) {
    // We set the root’s value equal to whatever gets returned from the removeNode function.
    // We pass two arguments to this function: the root, and the node’s value that we want to delete
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, data) {
    // Nodes are present in the tree, so !node returns false.
    if (!node) {
      return null;
    }
    if (data < node.data) {
      // Set the left node’s value equal to whatever gets returned from the removeNode function,
      //which we invoke again, only now with the value of the left node as the first argument.
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      // the node is a leaf and doesn’t have a left and right node
      // We set the node equal to null: the node gets deleted.
      if (!node.left && !node.right) {
        node = null;
        return node;
      }
      if (!node.left) {
        node = node.right;
        return node;
      }
      if (!node.right) {
        node = node.left;
        return node;
      }

      // ## When there is a left node and a right node. ##
      // findMinNode is a function which finds the minimum value of the right subtree.
      // It needs to be the right subtree​ because the minimum value means that it’s at least always bigger than
      // every value on the left subtree, and always smaller than any value on the right subtree!
      // After we find that minimum node, we replace the current node with the minimum node,
      // by setting its value equal to the minimum node’s value.
      // We then remove the node that’s on the right,
      // as we replaced the current node with that node (otherwise they would be duplicated).
      // The node has now been deleted and replaced!

      let min = this.findMinNode(node.right);
      node.data = min.data;
      node.right = this.removeNode(node.right, min.data);
      return node;
    }
  }

  // Three ways to traverse (go through) a binary search tree:
  // Inorder
  // Preorder
  // Postorder

  // Inorder
  // Left subtree
  // Root node
  // Right subtree
  // The inorder way is important if you want to flatten the tree back into its original sequence.
  inorder(node) {
    if (node) {
      this.inorder(node.left);
      this.inorder(node.right);
    }
  }
  // Preorder
  // Root node
  // Left subtree
  // Right subtree
  // The preorder way is important if you need to inspect roots before inspecting the leaves.
  preOrder(node) {
    if (node) {
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
  // Postorder
  // Left subtree
  // Right subtree
  // Root node
  // The postorder way is important if you want to delete an entire tree,
  // or simply want to inspect the leaves before inspecting the nodes.
  // If you deleted the root node, you wouldn’t be able to delete the nodes in the right subtree!
  postOrder(node) {
    if (node) {
      this.postOrder(node.left);
      this.postOrder(node.right);
    }
  }

  // Depth-first traversal involves traversing a tree from top to bottom.
  // In depth-first traversal, we first traverse through the left subtrees,
  // and then the right subtrees!
  // Depth-first traversal uses a stack data structure.
  // The stack keeps track of all the visited nodes! However, the stack is implemented implicitly.

  // Breadth-first traversal involves traversing the binary search tree from left to right.
  // With breadth-first traversal, we first traverse through one level of children nodes,
  // then through one level of grandchildren nodes, then through one level of grand-grandchildren nodes, etc.
  // Breadth-first traversal uses a queue.
  // Queues allow us to store a reference to the nodes that we want to visit in the future, but haven’t visited yet!
  traverseBFS() {
    // First, we need to check whether the tree has nodes at all
    if (!this.root) return;
    //Initialize the queue
    this.queue = [];
    // The first node that needs to be pushed to the queue, is the root.
    // This means that the queue has a length, and the while condition returns true.
    this.queue.push(this.root);
    this.output = [];

    while (this.queue.length) {
      // We declare a variable called node, and set it equal to the last item in the queue,
      // which now gets removed from the queue.
      const node = this.queue.shift();
      // Does this item have a node on the left?
      // If yes, then that item gets pushed to the queue, the same logic gets repeated for its right node.
      if (node.left) {
        this.queue.push(node.left);
      }
      if (node.right) {
        this.queue.push(node.right);
      }

      this.output.push(node.data);
    }
    // The node that got removed from the queue gets returned!
    return this.output;
  }

  getMin() {
    let node = this.root;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  getMax() {
    let node = this.root;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = BinarySearchTree;
