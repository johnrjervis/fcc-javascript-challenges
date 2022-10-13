const createTestTree = () => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(8); // first layer on right side
  testTree.add(-4); // first layer on left side
  testTree.add(-2); // second layer on left side
  testTree.add(-8); // second layer on left side
  testTree.add(-1); // third layer on left side
  testTree.add(-5); // third layer on left side
  testTree.add(-10); // third layer on left side
  testTree.add(12); // second layer on right side
  testTree.add(6); // second layer on right side
  testTree.add(7); // third layer on right side
  testTree.add(5); // third layer on right side
  testTree.add(10); // third layer on right side
  testTree.add(14); // third layer on right side
  testTree.add(2); // fourth layer on right side
  testTree.add(4); // fifth layer on right side
  return testTree;
}

QUnit.test("Test 117: getMin returns the smallest value in a tree when starting with the root node", assert => {
  const testTree = createTestTree();

  assert.equal(testTree.getMin(testTree.root), -10);
});

QUnit.test("Test 118: getMinValue returns the smallest value in the right branch of a tree when starting with the root node's right child", assert => {
  const testTree = createTestTree();
  assert.equal(testTree.getMin(testTree.root.right), 2);
});

QUnit.test("Test 119: getMin returns the smallest value in the left branch of a tree when starting with the root node's left child", assert => {
  const testTree = createTestTree();

  assert.deepEqual(testTree.getMin(testTree.root.left), -10);
});

QUnit.test("Test 120: When a root node with two children is removed, the new root node takes the value of its former right child", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-1);
  testTree.add(1);

  testTree.remove(0)

  assert.equal(testTree.root.value, 1);
});

QUnit.test("Test 121: When a root node with two children is removed, the left child of the removed node becomes the left child of the new root node", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-1);
  testTree.add(1);

  testTree.remove(0)

  assert.equal(testTree.root.left.value, -1);
});

QUnit.test("Test 122: When a root node with two children (which have no children of their own) is removed, the right child of the new root node will be null", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-1);
  testTree.add(1);

  testTree.remove(0)

  assert.equal(testTree.root.right, null);
});

QUnit.test("Test 123: When the root node is removed, the left branch of the root will be unchanged", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-4); // first child level on left side
  testTree.add(1); // first child level on right side
  testTree.add(-2); // second child level on left side
  testTree.add(-8); // second child level on left side
  testTree.add(-3); // third child level on left side

  testTree.remove(0)

  assert.equal(testTree.root.value, 1);
  assert.equal(testTree.root.left.value, -4);
  assert.equal(testTree.root.left.right.value, -2);
  assert.equal(testTree.root.left.left.value, -8);
  assert.equal(testTree.root.left.right.left.value, -3);
  // Note: need to use leftTree.root in the assertion; using lefTree includes all the methods in the comparison
});

QUnit.test("Test 124: If the root node's right child only has right sided children, removing the root will cause the right child to become the new root and its chain of right-sided children will be preserved", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-1); // first child level on left side
  testTree.add(1); // first child level on right side
  testTree.add(2); // second child level on right side
  testTree.add(3); // third child level on right side
  testTree.add(4); // fourth child level on right side

  testTree.remove(0)

  assert.equal(testTree.root.value, 1);
  assert.equal(testTree.root.right.value, 2);
  assert.equal(testTree.root.right.right.value, 3);
  assert.equal(testTree.root.right.right.right.value, 4);
});

QUnit.test("Test 125: removing the root node from an arbitrarily complex tree gives the expected result", assert => {
  const testTree = createTestTree();

  testTree.remove(0);

  assert.equal(testTree.root.value, 2);
  assert.equal(testTree.root.right.value, 8);
  assert.equal(testTree.root.right.right.value, 12);
  assert.equal(testTree.root.right.left.value, 6);
  assert.equal(testTree.root.right.left.left.value, 5);
  assert.equal(testTree.root.right.left.right.value, 7);
  assert.equal(testTree.root.right.right.left.value, 10);
  assert.equal(testTree.root.right.right.right.value, 14);
  assert.equal(testTree.root.right.left.left.left.value, 4);
});

QUnit.test("Test 126: removing the root node's right child from an arbitrarily complex tree gives the expected result", assert => {
  const testTree = createTestTree();

  testTree.remove(8);

  assert.equal(testTree.root.value, 0);
  assert.equal(testTree.root.left.value, -4);
  assert.equal(testTree.root.right.value, 10);
  assert.equal(testTree.root.right.right.value, 12);
  assert.equal(testTree.root.right.left.value, 6);
  assert.equal(testTree.root.right.left.left.value, 5);
  assert.equal(testTree.root.right.left.right.value, 7);
  assert.equal(testTree.root.right.left.left.left.value, 2);
  assert.equal(testTree.root.right.left.left.left.right.value, 4);
  assert.equal(testTree.root.right.right.right.value, 14);
});

QUnit.test("Test 127: removing the root node's left child from an arbitrarily complex tree gives the expected result", assert => {
  const testTree = createTestTree();

  testTree.remove(-4);

  assert.equal(testTree.root.value, 0);
  assert.equal(testTree.root.right.value, 8);
  assert.equal(testTree.root.left.value, -2);
  assert.equal(testTree.root.left.left.value, -8);
  assert.equal(testTree.root.left.right.value, -1);
  assert.equal(testTree.root.left.left.left.value, -10);
  assert.equal(testTree.root.left.left.right.value, -5);
});

QUnit.test("Test 128: it is possible to remove nodes with two children from the middle of an arbitrarily complex tree", assert => {
  const testTree = createTestTree();

  testTree.remove(6);

  assert.equal(testTree.root.value, 0);
  assert.equal(testTree.root.right.value, 8);
  assert.equal(testTree.root.right.left.value, 7);
  assert.equal(testTree.root.right.left.left.value, 5);
  assert.equal(testTree.root.right.left.left.left.value, 2);
  assert.equal(testTree.root.right.left.left.left.right.value, 4);
  assert.equal(testTree.root.right.right.value, 12);
  assert.equal(testTree.root.right.right.left.value, 10);
  assert.equal(testTree.root.right.right.right.value, 14);
  assert.equal(testTree.root.left.value, -4);
  assert.equal(testTree.root.left.left.value, -8);
  assert.equal(testTree.root.left.right.value, -2);
  assert.equal(testTree.root.left.right.right.value, -1);
  assert.equal(testTree.root.left.left.left.value, -10);
  assert.equal(testTree.root.left.left.right.value, -5);
});

