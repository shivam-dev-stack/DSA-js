class Stack {
  constructor(max) {
    this.items = [];
    this.max = max;
  }

  push(element) {
    if (this.items.length < this.max) {
      this.items[this.items.length] = element;
    } else {
      throw Error("Overflow")
    }
  }

  pop() {
    if (this.items.length === 0) {
      return "Underflow";
    }
    return this.items.pop();
  }

  display() {
    console.log(...this.items);
  }
}

export {Stack};


