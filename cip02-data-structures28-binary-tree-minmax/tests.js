QUnit.test("Test 15: Trying to find the minimum value of an empty tree returns null", assert => {
  const testTree = new BinarySearchTree();

  assert.equal(testTree.findMin(), null);
});

QUnit.test("Test 16: Trying to find the maximum value of an empty tree returns null", assert => {
  const testTree = new BinarySearchTree();

  assert.equal(testTree.findMax(), null);
});

QUnit.test("Test 17: findMin returns the value of the root node in a one-node tree", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);

  assert.equal(testTree.findMin(), 0);
});

QUnit.test("Test 18: findMax returns the value of the root node in a one-node tree", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);

  assert.equal(testTree.findMax(), 0);
});

QUnit.test("Test 19: findMin returns the left value of the root node in a tree that is fully populated to two levels", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-1);
  testTree.add(1);

  assert.equal(testTree.findMin(), -1);
});

QUnit.test("Test 20: findMax returns the right value of the root node in a tree that is fully populated to two levels", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-1);
  testTree.add(1);

  assert.equal(testTree.findMax(), 1);
});

QUnit.test("Test 21: findMin returns the value of the node at the end of the left path of a tree with an arbitrary number of levels", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-1);
  testTree.add(1);
  testTree.add(-2);
  testTree.add(2);
  testTree.add(-4);
  testTree.add(4);
  testTree.add(-3);
  testTree.add(3);

  assert.equal(testTree.findMin(), -4);
});

QUnit.test("Test 22: findMax returns the value of the node at the end of the right path of a tree with an arbitrary number of levels", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-1);
  testTree.add(1);
  testTree.add(-2);
  testTree.add(2);
  testTree.add(-4);
  testTree.add(4);
  testTree.add(-3);
  testTree.add(3);

  assert.equal(testTree.findMax(), 4);
});
