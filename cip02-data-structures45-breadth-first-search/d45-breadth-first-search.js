function bfs(graph, root) {
  var nodesLen = {};

  for (let i = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity;
  };

  nodesLen[root] = 0;

  let step = 1;
  const queue = [graph[root]];
  const nextQueue = [];

  while (queue.length > 0) {
    const currentNode = queue.shift();

    for (let j = 0; j < currentNode.length; j++) {
      if (currentNode[j] === 1 && nodesLen[j] === Infinity) {
         nodesLen[j] = step;
         nextQueue.push(graph[j]);
      }

    }

    if (queue.length === 0 && nextQueue.length > 0) {
      while (nextQueue.length > 0) {
        queue.push(nextQueue.shift());
      };
      step++;
    }
  }

  return nodesLen;
};

var exBFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
];
console.log(bfs(exBFSGraph, 3));
