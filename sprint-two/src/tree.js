var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];// fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var result = false;
  var innerFunction = function (nodes) {
    nodes.forEach(function (node) {
      if (node.value === target) {
        result = true;
        return true;
      }
      if (node.children) {
        innerFunction(node.children);
      }
      return false;
    });
  };
  innerFunction(this.children);
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
