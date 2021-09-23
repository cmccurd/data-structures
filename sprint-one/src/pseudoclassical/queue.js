var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};

};


Queue.prototype.enqueue = function (val) {
  return this.storage[this.size() + 1] = val;
};

Queue.prototype.dequeue = function () {
  var result = this.storage['1'];
  delete this.storage['1'];
  var tempStorage = {};
  for (var key in this.storage) {
    tempStorage[key - 1] = this.storage[key];
  }
  this.storage = tempStorage;
  return result;
};

Queue.prototype.size = function () {
  var counter = 0;
  for (var key in this.storage) {
    counter++;
  }
  return counter;
};