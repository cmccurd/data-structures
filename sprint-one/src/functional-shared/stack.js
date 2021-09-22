var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {}
  };
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};


stackMethods.push = function (value) {
  var size = this.size();
  var newKey = size + 1;
  return this.storage[newKey] = value;
};

stackMethods.pop = function () {
  var size = this.size();
  var result = this.storage[size];
  delete this.storage[size];
  return result;
};

stackMethods.size = function () {
  var counter = 0;
  for (var key in this.storage) {
    counter++;
  }
  return counter;
};