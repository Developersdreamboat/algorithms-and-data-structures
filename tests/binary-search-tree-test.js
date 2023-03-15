const { Tree, Node } = require('../data-structures/binary-search-tree');
const mergeSort = require("../algorithms/recursion/merge-sort");
const removeDuplicatesFromSortedArray = require("../modules/remove-duplicates");
const prettyPrint = require("../modules/pretty-print");

/* Driver */
const array = [5, 1, 10, 2, 1, 8, 4, 5, 3, 5];
const sortedArray = mergeSort(array);
const buildArray = removeDuplicatesFromSortedArray(sortedArray);
let tree = new Tree(buildArray);
prettyPrint(tree.root);

/* Insertion */
tree.insert(7);
prettyPrint(tree.root);

/* Deletion */
tree.delete(8);
prettyPrint(tree.root);

/* Search */
console.log(tree.find(5));
console.log(tree.find(8));

/* Test iteratives with provided function and without */
function printNodeValue(node) {
  console.log(node.data);
}
tree.levelOrder(printNodeValue);
console.log(tree.levelOrder());
tree.inOrderIterative(printNodeValue);
console.log(tree.inOrderIterative());
tree.preOrderIterative(printNodeValue);
console.log(tree.preOrderIterative());
tree.postOrderIterative(printNodeValue);
console.log(tree.postOrderIterative());

/* Test recursives with provided function */
const values = [];
function pushNodeValue(node) {
  values.push(node.data);
}
//tree.inOrderRecursive(pushNodeValue);
//tree.preOrderRecursive(pushNodeValue);
//tree.postOrderRecursive(pushNodeValue);
console.log(`Depth Recursive Array: ${values}`);

/* Height/Depth of tree */
const testNode1 = tree.find(3);
const testNode2 = tree.find(5);
const testNode3 = tree.find(4);
console.log(`3: ${tree.height(testNode1)}\n 5: ${tree.height(testNode2)}\n 4: ${tree.height(testNode3)}`);
console.log(`3: ${tree.depth(testNode1)}\n 5: ${tree.depth(testNode2)}\n 4: ${tree.depth(testNode3)}`);
console.log(`3: ${tree.depthIterative(testNode1)}\n 5: ${tree.depthIterative(testNode2)}\n 4: ${tree.depthIterative(testNode3)}`);

/* Check if balanced */
console.log(`Is tree balanced: ${tree.isBalanced()}`);
prettyPrint(tree.root);
tree.insert(100);
tree.insert(150);
tree.insert(350);
tree.insert(450);
console.log(`Is changed tree balanced: ${tree.isBalanced()}`);
prettyPrint(tree.root);