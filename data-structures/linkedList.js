class Node {
  constructor(data, next = null) {
    this._data = data;
    this._next = next;
  }

  get data() {
    return this._data;
  } 
  
  set data(value) {
    this._data = value;
  }

  get next() {
    return this._next;
  }

  set next(node) {
    this._next = node;
  }
}

class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
  }

  get head() {
    return this._head;
  } 
  
  set head(node) {
    this._head = node;
  }

  get tail() {
    return this._tail;
  }

  set tail(node) {
    this._tail = node;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }

  prepend(data) {
    const newNode = new Node(data);

    if (!this.head) {   
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
  }

  size() {
    let current = this.head;
    let count = 0;

    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }

  at(index) {
    let count = 0;
    let current = this.head;

    while(current && count < index) {
      count++;
      current = current.next;
    }

    return current;
  }

  pop() {
    if (!this.head) return;

    let current = this.head;
    let previous = null;
    
    while (current.next) {
      previous = current;
      current = current.next;
    } 
    
    if (previous) {
      previous.next = null;
      this.tail = previous;
    } else {
      this.head = null;
      this.tail = null;
    }
  }

  contains(data) {
    let current = this.head;

    while (current) {
      if (current.data === data) {
        return true;
      }

      current = current.next;
    }

    return false;
  }

  find(data) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === data) {
        return index;
      }

      current = current.next;
      index++;
    }

    return null;
  }
  
  toString() {
    let current = this.head;
    let resultString = '';

    while (current) {
      resultString += `( ${current.data} ) -> `;
      current = current.next;
    }

    resultString += 'null';
    return resultString;
  }

  insertAt(value, index) {
    if (index < 0 || this.size() < index) {
      return;
    }

    if (index === 0) {
      this.prepend(value);
      return;
    }

    let newNode = new Node(value);
    let searchedNode = this.at(index);
    newNode.next = searchedNode;
    this.at(index - 1).next = newNode;
  }
  
  removeAt(index) {
    if (index < 0 || this.size() < index) {
      return;
    }

    if (index === 0) {
      if (this.size() === 1) {
        this.pop();
      }

      this.head = this.at(index + 1);
      return;
    }

    this.at(index - 1).next = this.at(index + 1);
  }
}

/* Test

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
*/