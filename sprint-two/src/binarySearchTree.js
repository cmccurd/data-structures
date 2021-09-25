var BinarySearchTree = function(value) {
  var someInstance = Object.create(bstMethods);
  someInstance.value = value;
  someInstance.left = undefined;
  someInstance.right = undefined;
  return someInstance;
};

var bstMethods = {};

//A .insert() method, which accepts a value and places it in the tree in the correct position.
bstMethods.insert = function (value) {
  var innerFunction = function (tree) {
    if (value === tree.value) {
      throw new TypeError('Can\'t do that');
    }
    if (value > tree.value) {
      if (tree.right === undefined) {
        tree.right = BinarySearchTree(value);
      } else {
        innerFunction(tree.right);
      }
    }
    if (value < tree.value) {
      if (tree.left === undefined) {
        tree.left = BinarySearchTree(value);
      } else {
        innerFunction(tree.left);
      }
    }
  };
  innerFunction(this);
  return;

};
//A .contains() method, which accepts a value and returns a boolean reflecting
//whether or not the value is contained in the tree.
bstMethods.contains = function (value) {
  var result = false;
  var innerFunction = function (tree) {
    if (value === tree.value) {
      result = true;
      return;
    }
    if (value > tree.value && tree.right) {
      innerFunction(tree.right);
    }

    if (value < tree.value && tree.left) {
      innerFunction(tree.left);
    }
  };
  innerFunction(this);
  return result;
};


//A .depthFirstLog() method, which accepts a callback and e
//xecutes it on every value contained in the tree.
bstMethods.depthFirstLog = function (cb) {

  cb(this.value);
  var innerFunction = function (tree) {
    if (tree.left) {
      cb(tree.left.value);
      innerFunction(tree.left);
    }
    if (tree.right) {
      cb(tree.right.value);
      innerFunction(tree.right);
    }
    return;
  };
  innerFunction(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
    depthFirstLog === Linear
    contain === Logarithmic
    insert === Logarithmic
 */