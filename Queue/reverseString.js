import { Queue } from "./queue.js";
import process from 'process'

let str = "shivam";
let length = str.length;
const queue = new Queue(length)

for(let i=0;i<length;i++){
    queue.enqueue(str[length-i-1]);
}

for(let i=0;i<length;i++){
    process.stdout.write(queue.dequeue())
}