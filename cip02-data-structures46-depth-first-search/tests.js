QUnit.test("Test 1: the dfs (depth-first search) function should return an array", assert => {
  const testResult = dfs(exDFSGraph, 0);

  assert.true(testResult instanceof Array);
});

QUnit.test("Test 2: the root value should be the first value in the array returned by dfs", assert => {
  const testResult = dfs(exDFSGraph, 2);

  assert.equal(testResult[0], 2);
});

QUnit.test("Test 3: if the root has no relationships with any other nodes, the dfs result will be a one-element list with the root's value", assert => {
  const testMatrix = [
    [0, 1, 0],
    [1, 0, 0],
    [0, 0, 0]
  ];

  const testResult = dfs(testMatrix, 2)

  assert.deepEqual(testResult, [2]);
});

QUnit.test("Test 4: for an adjacency matrix with two related nodes, the result returned by dfs contains both node values whichever node is passed as the root", assert => {
  const testMatrix = [
    [0, 1],
    [1, 0],
  ];
  const testResult0 = dfs(testMatrix, 0);
  const testResult1 = dfs(testMatrix, 1);

  assert.deepEqual(testResult0, [0, 1]);
  assert.deepEqual(testResult1, [1, 0]);
});

QUnit.test("Test 5:  for an adjacency matrix in which all nodes are only related to their neighbouring nodes, the dfs result for a root at the edge of the matrix contains entries for all nodes in the correct order", assert => {
  const testResult = dfs(exDFSGraph, 0)

  assert.deepEqual(testResult, [0, 1, 2, 3]);
});

QUnit.test("Test 6: for an adjacency matrix in which all nodes are only related to their neighbouring nodes, the dfs result for a root in the middle of the matrix contains entries for all nodes in the correct order", assert => {
  const testResult = dfs(exDFSGraph, 1);

  assert.deepEqual(testResult, [1, 0, 2, 3]);
});

QUnit.test("Test 7: A node that has no relationship (direct or indirectly through other nodes) with the root will not be present in a dfs result", assert => {
  const testMatrix = [
    [0, 1, 0],
    [1, 0, 0],
    [0, 0, 0]
  ];

  const testResult = dfs(testMatrix, 0)

  assert.equal(testResult.indexOf(2), -1);
});

QUnit.test("Test 8: dfs should return the expected result for a complex adjacency matrix with two related unreachable nodes and one node three steps away from the root", assert => {
  const testMatrix = [
    [0, 1, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1, 0],
  ];
  const expectedResult = [3, 4, 0, 1, 2];

  assert.deepEqual(dfs(testMatrix, 3), expectedResult);
});
