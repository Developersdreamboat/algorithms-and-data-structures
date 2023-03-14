const { LinkedList } = require('../data-structures/linkedList');

let linkedList = new LinkedList();

linkedList.append(1);
linkedList.prepend(0);
linkedList.append(50);
linkedList.append(100);
linkedList.append(200);

console.log(linkedList.size());
console.log(linkedList.head);
console.log(linkedList.tail);
console.log(linkedList.at(4));
linkedList.pop();
console.log(linkedList.contains(200));
console.log(linkedList.contains(100));
console.log(linkedList.find(100));
console.log(linkedList.find(200));
console.log(linkedList.toString()); 
console.log('########################################################');
linkedList.insertAt(150, 4);
console.log(linkedList.toString());
linkedList.insertAt(5, 0);
console.log(linkedList.toString());
linkedList.insertAt(7, -5);
console.log(linkedList.toString());
console.log('########################################################');
linkedList.removeAt(0);
console.log(linkedList.toString());
linkedList.removeAt(5);
console.log(linkedList.toString());
linkedList.removeAt(1);
console.log(linkedList.toString());
