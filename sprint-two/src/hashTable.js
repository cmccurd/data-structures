

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //this.size = {}
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (Array.isArray(this._storage[index])) {
    for ( var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        this._storage[index][i][1] = v;
        return;
      }
    }
    this._storage[index].push([k, v]);
    return;
  } else {
    this._storage[index] = [[k, v]];
    return;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index].length > 1) {
    for ( var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        return this._storage[index][i][1];
      }
    }
  } else if (this._storage[index].length === 1) {
    return this._storage[index][0][1];
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage[index].length > 1) {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        this._storage[index].splice(i, 1);
        return;
      }
    }
  } else if (this._storage[index].length === 1) {
    this._storage[index].splice(0, 1);
    return;
  }

  return undefined;
};
//Add a test case
/*
 * Complexity: What is the time complexity of the above functions?
    The functions only loop at specific indexes.
    Constant Amorization
 */

