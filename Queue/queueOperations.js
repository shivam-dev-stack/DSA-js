import { Queue } from "./queue.js"

const queue = new Queue(7)

console.log(queue.dequeue())
console.log(queue.enqueue(7))
console.log(queue.enqueue(2))
console.log(queue.enqueue(6))
console.log(queue.enqueue(4))
console.log(queue.dequeue())
console.log(queue.enqueue(5))
console.log(queue.dequeue())
console.log(queue.peek())
let str = queue.printQueue;
console.log(str)