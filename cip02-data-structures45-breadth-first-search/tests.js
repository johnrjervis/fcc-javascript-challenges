QUnit.test("Test 1: the bfs (breadth first search) function should return a JavaScript object", assert => {
  const testResult = bfs(exBFSGraph, 0);

  assert.true(testResult instanceof Object);
});

QUnit.test("Test 2: for each node in the adjacency matrix that is passed to bfs, the search result object has an attribute with the node's value as its key", assert => {
  //const nodes = [0, 1, 2];

  const testResult = bfs(exBFSGraph, 0);

  assert.true([0, 1, 2].every(function (element) {return testResult[element] !== undefined} ));
});

QUnit.test("Test 3: the distance to a node that cannot be reached from the bfs root node should be Infinity", assert => {
  const testMatrix = [
    [0, 0],
    [0, 0],
  ];

  const testResult = bfs(testMatrix, 0)

  assert.equal(testResult[1], Infinity);
});

QUnit.test("Test 4: the distance between the bfs root and itself should be zero", assert => {
  const testResult0 = bfs(exBFSGraph, 0);
  const testResult1 = bfs(exBFSGraph, 1);

  assert.equal(testResult0[0], 0);
  assert.equal(testResult1[1], 0);
});

QUnit.test("Test 5: nodes that have a direct relationship with the root node have a distance of 1 in the bfs results", assert => {
  const testResult = bfs(exBFSGraph, 1)

  assert.equal(testResult[0], 1);
  assert.equal(testResult[2], 1);
});

QUnit.test("Test 6: If every node is either directly or indirectly related to the root, then none of the results in a bfs should be equal to Infinity", assert => {
  const testResult = bfs(exBFSGraph, 2);

  assert.true([0, 1, 2, 3].every(function (elem) {return testResult[elem] !== Infinity}), 2);
});

QUnit.test("Test 7: A node that has a relationship with a node that is related to the root node has a distance of two from the root node in a bfs result", assert => {
  const testResult = bfs(exBFSGraph, 0);

  assert.equal(testResult[2], 2);
});

QUnit.test("Test 8: bfs should return the expected result for a complex adjacency matrix with two related unreachable nodes and one node three steps away from the root", assert => {
  const testMatrix = [
    [0, 1, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1, 0],
  ];
  const expectedResult = {0: 2, 1: 3, 2: 2, 3: 0, 4: 1, 5: Infinity, 6: Infinity}

  assert.deepEqual(bfs(testMatrix, 3), expectedResult);
});
