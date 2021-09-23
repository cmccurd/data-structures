var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {
  enqueue: function (value) {
    var size = this.size();
    var newKey = size + 1;
    return this.storage[newKey] = value;
  },

  dequeue: function () {
    var result = this.storage['1'];
    delete this.storage['1'];
    var tempStorage = {};
    for (var key in this.storage) {
      tempStorage[key - 1] = this.storage[key];
    }
    this.storage = tempStorage;
    return result;
  },

  size: function () {
    var counter = 0;
    for (var key in this.storage) {
      counter++;
    }
    return counter;
  }
};


