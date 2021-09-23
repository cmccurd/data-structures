var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    return this._storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  //values are uniq to the set storage
  if (this._storage[item]) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item) {
  if (this.contains(item)) {
    var result = this._storage[item];
    delete this._storage[item];
    return result;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * CONSTANT TIME ALGORITHM
 * O(1)
 */
