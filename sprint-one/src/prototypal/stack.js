var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {
  push: function (val) {
    var size = this.size();
    var newKey = size + 1;
    return this.storage[newKey] = val;
  },

  pop: function () {
    var size = this.size();
    var result = this.storage[size];
    delete this.storage[size];
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


