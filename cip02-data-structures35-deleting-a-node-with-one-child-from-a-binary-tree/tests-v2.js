QUnit.test("Test 114: countChildren returns zero when passed a node that has no children", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);

  assert.equal(countChildren(testTree.root), 0);
});

QUnit.test("Test 115: countChildren returns one when passed a node that has a child on the left side", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-1);

  assert.equal(countChildren(testTree.root), 1);
});

QUnit.test("Test 116: countChildren returns one when passed a node that has a child on the right side", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(1);

  assert.equal(countChildren(testTree.root), 1);
});

QUnit.test("Test 117: countChildren returns two when passed a node that has children on both sides", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(1);

  assert.equal(countChildren(testTree.root), 1);
});

