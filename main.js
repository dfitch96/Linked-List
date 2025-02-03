import { Node, LinkedList } from "./LinkedList.js";


let list = new LinkedList();

console.log(list.toString());
console.log(list.at(3));
console.log(list.head());
console.log(list.tail());
console.log(list.pop());
console.log(list.contains(5));