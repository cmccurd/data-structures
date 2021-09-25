// Instantiate a new graph
var Graph = function() {
  //this.storage = {k: v, k: v}
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var edgeName = 'edge' + node;
  this.storage[node] = node;
  this.storage[edgeName] = {};

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage[node] === node;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var edgeName = 'edge' + node;
  if (Object.keys(this.storage[edgeName])) {
    for (var i = 0; i < Object.keys(this.storage[edgeName]).length; i++) {
      delete this.storage['edge' + Object.keys(this.storage[edgeName])[i]][node];
    }
  }
  delete this.storage[edgeName];
  delete this.storage[node];

};

// Returns a boolean indicating whether two specified nodes are connected.
//Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;
  var edges = this.storage['edge' + fromNode];

  if (edges[toNode]) {
    result = true;
    return result;
  } else {
    return result;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage['edge' + fromNode][toNode] = toNode;
  this.storage['edge' + toNode][fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.storage['edge' + fromNode][toNode];
  delete this.storage['edge' + toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(Object.keys(this.storage), function (item) {
    if (!item.includes('edge')) {
      cb(item);
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
//