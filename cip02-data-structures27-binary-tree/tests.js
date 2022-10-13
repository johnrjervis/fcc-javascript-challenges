QUnit.test("Test 1: Adding a value to an empty tree creates a new root node", assert => {
  const testTree = new BinarySearchTree();

  testTree.add(0);

  assert.true(testTree.root instanceof Node);
});

QUnit.test("Test 2: When a new root node is added, it is a assigned the value of the argument supplied to add", assert => {
  const testTree = new BinarySearchTree();

  testTree.add(0);

  assert.equal(testTree.root.value, 0);
});

QUnit.test("Test 3: When a new root node is added, it's left and right properties are null", assert => {
  const testTree = new BinarySearchTree();

  testTree.add(0);

  assert.equal(testTree.root.left, null);
  assert.equal(testTree.root.right, null);
});

QUnit.test("Test 4: A new value that is less than the root node value will be asigned to the root's left property if it is not already filled", assert => {
  const testTree = new BinarySearchTree();

  testTree.add(0);
  assert.equal(testTree.root.left, null);
  testTree.add(-1);

  assert.equal(testTree.root.left.value, -1);
});

QUnit.test("Test 5: A new value that is greater than the root node value will be asigned to the root's right property if it is not already filled", assert => {
  const testTree = new BinarySearchTree();

  testTree.add(0);
  assert.equal(testTree.root.right, null);
  testTree.add(1);

  assert.equal(testTree.root.right.value, 1);
});

QUnit.test("Test 6: Add returns null if its argument is equal to the root node's value", assert => {
  const testTree = new BinarySearchTree();

  testTree.add(0);

  assert.equal(testTree.add(0), null);
});

QUnit.test("Test 7: A root node with null left and right properties will be unchanged when add is called with an argument that matches the root node's value", assert => {
  const testTree = new BinarySearchTree();

  testTree.add(0);
  testTree.add(0);

  assert.equal(testTree.root.left, null);
  assert.equal(testTree.root.right, null);
});

QUnit.test("Test 8: The value of an existing node on the left side of the root node is not changed if another value is added that is less than the root node's value", assert => {
  const testTree = new BinarySearchTree();

  testTree.add(0);
  testTree.add(-1);
  testTree.add(-2);

  assert.equal(testTree.root.left.value, -1);
});

QUnit.test("Test 9: Nodes can be added as the left side children of the root's left child nodes", assert => {
  const testTree = new BinarySearchTree();

  testTree.add(0);
  testTree.add(-1);
  testTree.add(-2);

  assert.equal(testTree.root.left.left.value, -2);
});

QUnit.test("Test 10: Nodes can be added as the right side children of the root's left child nodes", assert => {
  const testTree = new BinarySearchTree();

  testTree.add(0);
  testTree.add(-2);
  testTree.add(-1);

  assert.equal(testTree.root.left.right.value, -1);
});

QUnit.test("Test 11: The value of an existing node on the right side of the root node is not changed if another value is added that is greater than the root node's value", assert => {
  const testTree = new BinarySearchTree();

  testTree.add(0);
  testTree.add(1);
  testTree.add(2);

  assert.equal(testTree.root.right.value, 1);
});

QUnit.test("Test 12: Nodes can be added as the right side children of the root's right child nodes", assert => {
  const testTree = new BinarySearchTree();

  testTree.add(0);
  testTree.add(1);
  testTree.add(2);

  assert.equal(testTree.root.right.right.value, 2);
});

QUnit.test("Test 13: Nodes can be added as the left side children of the root's right child nodes", assert => {
  const testTree = new BinarySearchTree();

  testTree.add(0);
  testTree.add(2);
  testTree.add(1);

  assert.equal(testTree.root.right.left.value, 1);
});

QUnit.test("Test 14: Nodes can be added at arbitrary positions in a tree", assert => {
  const testTree = new BinarySearchTree();

  testTree.add(0);
  testTree.add(4);
  testTree.add(8);
  testTree.add(-2);
  testTree.add(2);
  testTree.add(5);
  testTree.add(3);

  //displayTree(testTree)

  assert.equal(testTree.root.value, 0);
  assert.equal(testTree.root.right.value, 4);
  assert.equal(testTree.root.right.right.value, 8);
  assert.equal(testTree.root.left.value, -2);
  assert.equal(testTree.root.right.left.value, 2);
  assert.equal(testTree.root.right.right.left.value, 5);
  assert.equal(testTree.root.right.left.right.value, 3);
});