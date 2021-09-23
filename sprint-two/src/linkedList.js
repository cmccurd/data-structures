var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
  };

  //REMOVE HEAD
  list.removeHead = function() {
    var result = list.head.value;
    list.head = list.head.next;
    return result;
  };

  //CONTAINS
  list.contains = function(target) {
    var result = false;
    var innerFunction = function(node) {
      if (node.value === target) {
        result = true;
        return;
      } else if (node.next === null) {
        return;
      } else {
        innerFunction(node.next);
      }
    };
    innerFunction(list.head);
    return result;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Contains - Linear O(n)
 * Everything else - Constant - O(1)
 */