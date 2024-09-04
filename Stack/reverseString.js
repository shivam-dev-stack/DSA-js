import { Stack } from "./stack.js";


let stack = new Stack(10);

let str = "shivam";
let size = str.length;
let re = ""

for(let i=0;i<size;i++){
    stack.push(str[i])
};

for(let i=0;i<size;i++){
    re += ""+stack.pop()
}

console.log(re)