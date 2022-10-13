QUnit.test("Test 94: remove should return null when called on an empty list", assert => {
  const testTree = new BinarySearchTree();

  assert.equal(testTree.remove(0), null);
});

QUnit.test("Test 95: the root node should not change when remove is called with an argument that does not match the root node's value", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);

  testTree.remove(1);

  assert.equal(testTree.root.value, 0);
});

QUnit.test("Test 96: it is possible to remove the root node", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);

  testTree.remove(0);

  assert.equal(testTree.root, null);
});

QUnit.test("Test 97: remove returns null if its argument is less than any value in the tree", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-1);

  assert.equal(testTree.remove(-2), null);
});

QUnit.test("Test 98: the binary tree is unchanged if the argument supplied to remove is less than any value in the tree", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-1);
  const rootNode = testTree.root;
  const leftChild = testTree.root.left;

  testTree.remove(-2)

  assert.deepEqual(testTree.root, rootNode);
  assert.deepEqual(testTree.root.left, leftChild);
});

QUnit.test("Test 99: it is possible to remove the root node's left child", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-1);
  assert.notEqual(testTree.root.left, null);
  assert.equal(testTree.root.left.value, -1);

  testTree.remove(-1);

  assert.equal(testTree.root.left, null);
});

QUnit.test("Test 100: it is possible to remove a node at an arbritrary depth level on the extreme left of a binary search tree", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-1);
  testTree.add(-2);
  testTree.add(-3);
  testTree.add(-4);
  assert.notEqual(testTree.root.left.left.left.left, null);
  assert.equal(testTree.root.left.left.left.left.value, -4);

  testTree.remove(-4);

  assert.equal(testTree.root.left.left.left.left, null);
});

QUnit.test("Test 101: remove returns null if its argument is greater than any value in the tree", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(1);

  assert.equal(testTree.remove(2), null);
});

QUnit.test("Test 102: the binary tree is unchanged if the argument supplied to remove is greater than any value in the tree", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(1);
  const rootNode = testTree.root;
  const rightChild = testTree.root.right;

  testTree.remove(2)

  assert.deepEqual(testTree.root, rootNode);
  assert.deepEqual(testTree.root.right, rightChild);
});

QUnit.test("Test 103: it is possible to remove the root node's right child", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(1);
  assert.notEqual(testTree.root.right, null);
  assert.equal(testTree.root.right.value, 1);

  testTree.remove(1);

  assert.equal(testTree.root.right, null);
});

QUnit.test("Test 104: it is possible to remove a node at an arbritrary depth level on the extreme right of a binary search tree", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(1);
  testTree.add(2);
  testTree.add(3);
  testTree.add(4);
  assert.notEqual(testTree.root.right.right.right.right, null);
  assert.equal(testTree.root.right.right.right.right.value, 4);

  testTree.remove(4);

  assert.equal(testTree.root.right.right.right.right, null);
});

QUnit.test("Test 105: it is possible to remove a leaf node in the middle of an] arbitrarily complex tree", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(1); // first layer on right side
  testTree.add(-2); // first layer on left side
  testTree.add(-1); // second layer on left side
  testTree.add(-3); // second layer on left side
  testTree.add(-4); // third layer on left side
  testTree.add(2); // second layer on right side
  testTree.add(4); // third layer on right side
  testTree.add(3); // fourth layer on right side
  testTree.add(5); // fourth layer on right side
  assert.notEqual(testTree.root.right.right.right.left, null)
  assert.equal(testTree.root.right.right.right.left.value, 3)

  testTree.remove(3);

  assert.equal(testTree.root.right.right.right.left, null);
});