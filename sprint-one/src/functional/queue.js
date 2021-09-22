var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var size = someInstance.size();
    var newKey = size + 1;
    return storage[newKey] = value;
  };

  someInstance.dequeue = function() {
    result = storage['1'];
    delete storage['1'];
    var tempStorage = {};
    var counter = 0;
    for (var key in storage) {
      counter++;
      tempStorage[counter] = storage[key];
    }
    storage = tempStorage;
    return result;

  };

  someInstance.size = function() {
    var counter = 0;
    for (var key in storage) {
      counter++;
    }
    return counter;
  };

  return someInstance;
};

