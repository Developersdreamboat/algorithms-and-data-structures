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
    if (node === null) {
      return null;
    }

    if (node.data === value) {
      return node;
    }

    if (node.data < value) {
      return this.find(value, node.right);
    } else if (node.data > value) {
      return this.find(value, node.left);
    }
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

  inOrderRecursive(callback, node = this.root) {
    if (node === null) return null;

    if (node.left !== null) {
      this.inOrderRecursive(callback, node.left);
    }

    callback(node);

    if (node.right !== null) {
      this.inOrderRecursive(callback, node.right);
    }
  }

  inOrderIterative(callback) {
    if (this.root === null) {
      return null;
    }
  
    const array = [];
    const stack = [];
    let current = this.root;
  
    while (stack.length !== 0 || current !== null) {
      if (current !== null) {
        stack.push(current);
        current = current.left;
      } else {
        current = stack.pop();
        array.push(current);
        current = current.right;
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

  preOrderRecursive(callback, node = this.root) {
    if (node === null) return null;

    callback(node);

    if (node.left !== null) {
      this.preOrderRecursive(callback, node.left);
    }

    if (node.right !== null) {
      this.preOrderRecursive(callback, node.right);
    }
  }
  
  preOrderIterative(callback) {
    if (this.root === null) {
      return null;
    }
  
    const array = [];
    const stack = [];
    stack.push(this.root);
  
    while (stack.length !== 0) {
      let current = stack.pop();
      array.push(current);
  
      if (current.right !== null) {
        stack.push(current.right);
      }
  
      if (current.left !== null) {
        stack.push(current.left);
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

  postOrderRecursive(callback, node = this.root) {
    if (node === null) return null;

    if (node.left !== null) {
      this.postOrderRecursive(callback, node.left);
    }

    if (node.right !== null) {
      this.postOrderRecursive(callback, node.right);
    }

    callback(node);
  }

  postOrderIterative(callback) {
    if (this.root === null) {
      return null;
    }
    
    const array = [];
    const stackPreOrder = [];
    const stackPostOrder = [];
    let current = this.root;
  
    stackPreOrder.push(current);
  
    while (stackPreOrder.length !== 0) {
      current = stackPreOrder.pop();
      stackPostOrder.push(current);
  
      if (current.left !== null) {
        stackPreOrder.push(current.left);
      }
  
      if (current.right !== null) {
        stackPreOrder.push(current.right);
      }
    }
  
    if (callback !== undefined) {
      for (let i = stackPostOrder.length - 1; i >= 0; i--) {
        callback(stackPostOrder[i]);
      }
      return;
    } else {
      for (let i = stackPostOrder.length - 1; i >= 0; i--) {
        array.push(stackPostOrder[i].data);
      }
      return array;
    }
  }

  height(node) {
    if (node === null) {
      return -1; 
    } else {
      
      const leftHeight = this.height(node.left);
      const rightHeight = this.height(node.right);
  
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }
} 

module.exports = { Tree, Node };
