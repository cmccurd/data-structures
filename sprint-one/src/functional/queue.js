var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var nameCounter = 0;
  var deleteCounter = 1;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    counter++;
    nameCounter++;
    return storage[nameCounter] = value;
  };

  someInstance.dequeue = function() {
    if (counter > 0) {
      counter--;
      var result = storage[deleteCounter];
      delete storage[deleteCounter];
      deleteCounter++;
      return result;
    }
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};