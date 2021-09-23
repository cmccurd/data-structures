class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(val) {
    return this.storage[this.size() + 1] = val;
  }

  pop() {
    var result = this.storage[this.size()];
    delete this.storage[this.size()];
    return result;
  }

  size() {
    var counter = 0;
    for (var key in this.storage) {
      counter++;
    }
    return counter;
  }
};