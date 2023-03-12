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
} 




const array = [5, 1, 10, 2, 1, 8, 4, 5, 3, 5];
const sortedArray = mergeSort(array);
const buildArray = removeDuplicatesFromSortedArray(sortedArray);
let tree = new Tree(buildArray);
prettyPrint(tree.root);