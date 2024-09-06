import {Stack} from './stack.js'

function isValidParentheses(s) {
    const stack = new Stack(10);
    const pairs = { '(': ')', '{': '}', '[': ']' };
    for (const char of s) {
      if (char in pairs) {
        stack.push(char);
      } else {
        if (pairs[stack.pop()] !== char) {
          return false;
        }
      }
    }
    return stack.items.length===0 ;
  }
  
  console.log(isValidParentheses("({[()]})"))