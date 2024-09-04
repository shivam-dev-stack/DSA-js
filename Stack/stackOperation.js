import { Stack } from "./stack.js";

let s = new Stack(5);
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
// s.push(6);
// s.push(7);
s.display();

console.log(s.pop());
s.display();
