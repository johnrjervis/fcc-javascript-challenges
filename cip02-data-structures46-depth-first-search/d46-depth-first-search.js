function dfs(graph, root) {
  const result = [];
  const stack = [];

  result.push(root);
  stack.push(graph[root]);

  while (stack.length > 0) {
    const currentNode = stack.pop();

    for (let i = 0; i < currentNode.length; i++) {
      if (currentNode[i] === 1 && result.indexOf(i) === -1) {
        result.push(i);  
        stack.push(currentNode);
        stack.push(graph[i]);
        break;
        /* Using break means that the search works through each branch to the end (the leaf nodes) before back-tracking
        Otherwise, dfs will add all nodes from a parent before searching through its children
        It is then necessary to call stack.push(currentNode) to put the current node back into the stack
        Which is necessary in case the node has more child nodes to search through */
      }
    };
  };

  return result;
}

var exDFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
];
console.log(dfs(exDFSGraph, 3));
