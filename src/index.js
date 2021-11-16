import MyArray from "./data-structures/array.js";
import HashTable from "./data-structures/hash-table.js";
import SinlglyLinkedList from "./data-structures/linkedList.js";

const myArray = new MyArray();

const hashTable = new HashTable(10);
//  hashTable.set("e1", 2000);
//  hashTable.set("e2", 2002);
//  hashTable.set("e3", 2003);

//  console.log('Hash: ', hashTable);
//  hashTable.delete('e2');
//  console.log('Hash: ', hashTable);

//  console.log('keys', hashTable.keys());

// myArray.push("e1");
// myArray.push("e2");
// myArray.push("e3");
// myArray.push("e4");
// console.log('Array : ', myArray);
// myArray.dequeueu();

// console.log('Array: ', myArray);


const linkedList = new SinlglyLinkedList('n1');
linkedList.append('n2');
linkedList.prepend('n0');
linkedList.append('n3');

console.log(linkedList);
console.log('Node at index 2: ', linkedList.getByIndex(2));
console.log('insert: ', linkedList.insert(2, 'n4'));
console.log(linkedList.getByIndex(2));
console.log('delete: ', linkedList.delete(2));
console.log(linkedList.getByIndex(2));

