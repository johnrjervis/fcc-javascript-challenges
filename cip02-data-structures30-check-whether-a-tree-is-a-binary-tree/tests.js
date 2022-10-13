QUnit.test("Test 30: isBinarySearchTree returns true for a tree that contains no nodes", assert => {
  const testTree = new BinarySearchTree();

  assert.true(isBinarySearchTree(testTree));
});

QUnit.test("Test 31: isBinarySearchTree returns true for a tree that only contains a root element", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);

  assert.true(isBinarySearchTree(testTree));
});

QUnit.test("Test 32: isBinarySearchTree returns false for a tree if the first left side child node's value is greater than the root node's value", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  const badNode = new Node(1);
  testTree.root.left = badNode;

  assert.false(isBinarySearchTree(testTree));
});

QUnit.test("Test 33: isBinarySearchTree returns false for a tree if the first left side child node's value is equal to the root node's value", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  const badNode = new Node(0);
  testTree.root.left = badNode;

  assert.false(isBinarySearchTree(testTree));
});

QUnit.test("Test 34: isBinarySearchTree returns false for a tree if the first right side child node's value is less than the root node's value", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  const badNode = new Node(-1);
  testTree.root.right = badNode;

  assert.false(isBinarySearchTree(testTree));
});

QUnit.test("Test 35: isBinarySearchTree returns false for a tree if the first right side child node's value is equal to the root node's value", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  const badNode = new Node(0);
  testTree.root.right = badNode;

  assert.false(isBinarySearchTree(testTree));
});

QUnit.test("Test 36: isBinarySearchTree returns false for a tree if any left side child node's value is greater than its parent node's value", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(1);
  const badNode = new Node(2);
  testTree.root.right.left = badNode;

  assert.false(isBinarySearchTree(testTree));
});

QUnit.test("Test 37: isBinarySearchTree returns false for a tree if any right side child node's value is less than its parent node's value", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(1);
  testTree.add(-1);
  const badNode = new Node(-3);
  testTree.root.right.right = badNode;

  assert.false(isBinarySearchTree(testTree));
});

QUnit.test("Test 38: isBinarySearchTree returns true for an abritrarily complex tree that conforms to the rules for a binary tree", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(1);
  testTree.add(-1);
  testTree.add(4);
  testTree.add(16);
  testTree.add(3);
  testTree.add(7);
  testTree.add(2);
  testTree.add(10);
  testTree.add(8);

  assert.true(isBinarySearchTree(testTree));
});

QUnit.test("Test 39: isBinarySearchTree returns false for an abritrarily complex tree that does not conform to the rules for a binary tree", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(1);
  testTree.add(-1);
  testTree.add(4);
  testTree.add(16);
  testTree.add(3);
  testTree.add(7);
  testTree.add(2);
  testTree.add(10);
  testTree.add(8);

  const badNode = new Node(5);
  testTree.root.right.right.left.left = badNode;

  assert.false(isBinarySearchTree(testTree));
});