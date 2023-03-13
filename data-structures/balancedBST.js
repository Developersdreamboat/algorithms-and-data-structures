const mergeSort = require("../algorithms/recursion/mergeSort");
const removeDuplicatesFromSortedArray = require("../modules/removeDuplicates");
const prettyPrint = require("../modules/prettyPrint");

class Node {
  constructor(data) {
    this._data = data;
    this._left = null;
    this._right = null;
  }

  get data() {
    return this._data;
  }

  set data(value) {
    this._data = value;
  }

  get left() {
    return this._left;
  }

  set left(value) {
    this._left = value;
  }

  get right() {
    return this._right;
  }

  set right(value) {
    this._right = value;
  } 
}

class Tree {
  constructor(array) {
    this._root = this.buildTree(array);
  }

  get root() {
    return this._root;
  }

  set root(value) {
    this._root = value;
  }

  buildTree(array, start = 0, end = array.length - 1) {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);

    let root = new Node(array[mid]);
    root.left = this.buildTree(array, start, mid - 1);
    root.right = this.buildTree(array, mid + 1, end);
  
    return root;
  }

  insert(value, node = this.root) {
    if (node === null) {
      node = new Node(value);
      return node;
    }

    if (node.data > value) {
      node.left = this.insert(value, node.left);
    } else if (node.data < value) {
      node.right = this.insert(value, node.right);
    }

    return node;
  }

  delete(value, node = this.root) {
    if (node === null) {
      return node;
    }
  
    if (node.data > value) {
      node.left = this.delete(value, node.left);
    } else if (node.data < value) {
      node.right = this.delete(value, node.right);
    } else {
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }
  
      const minValue = this.findMinNode(node.right).data;
      node.data = minValue;
      node.right = this.delete(minValue, node.right);
    }
  
    return node;
  }
  
  findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  find(value, node = this.root) {
    if (node.data === value) {
      return node;
    }

    if (node.data < value) {
      return this.find(value, node.right);
    } else if (node.data > value) {
      return this.find(value, node.left);
    }
    
    return null;
  }

  levelOrder(callback) {
    if (this.root === null) {
      return null;
    }

    const array = [];
    const queue = [];
    queue.push(this.root);

    while (queue.length !== 0) {
      let current = queue.shift();

      array.push(current);

      if (current.left !== null) {
        queue.push(current.left);
      }

      if (current.right !== null) {
        queue.push(current.right);
      }
    }

    if (callback !== undefined) {
      for (let i = 0; i < array.length; i++) {
        callback(array[i]);
      }

      return;
    } else {
      for (let i = 0; i < array.length; i++) {
        array[i] = array[i].data;
      }

      return array;
    }
  }
} 



/* Driver */
/* const array = [5, 1, 10, 2, 1, 8, 4, 5, 3, 5];
const sortedArray = mergeSort(array);
const buildArray = removeDuplicatesFromSortedArray(sortedArray);
let tree = new Tree(buildArray); */

/* Insertion */
/* tree.insert(7);
prettyPrint(tree.root); */

/* Deletion */
/* tree.delete(8);
prettyPrint(tree.root); */

/* Search */
/* console.log(tree.find(5)); */

/* Test with provided function and without */
/* function printNodeValue(node) {
  console.log(node.data);
}
tree.levelOrder(printNodeValue);
console.log(tree.levelOrder()); */
