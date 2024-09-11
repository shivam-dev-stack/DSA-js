import { LinkedList } from "./linkedList.js";

const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.prepend(5);
linkedList.print(); 
linkedList.delete(20);
linkedList.print();
linkedList.insert(1,7)
linkedList.print();
linkedList.reverseList()
linkedList.print();
linkedList.deleteNth(2)
linkedList.print()
linkedList.prepend(5)
linkedList.print()
console.log(linkedList.count(5))
console.log(linkedList.search(10)); 
console.log(linkedList.search(50)); 