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

QUnit.test("Test 129: Trying to find the minimum value of an empty tree returns null", assert => {
  const testTree = new BinarySearchTree();

  assert.equal(testTree.invert(), null);
});

QUnit.test("Test 130: Inverting a tree that has a root node with no children does not change the tree", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);

  testTree.invert();

  assert.equal(testTree.root.value, 0);
});

QUnit.test("Test 131: Inverting a tree that has a root node with a child on the left side switches the child node to the root's right side", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-1);

  testTree.invert();

  assert.equal(testTree.root.right.value, -1);
});


QUnit.test("Test 132: Inverting a tree that has a root node with a child on the right side switches the child node to the root's left side", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(1);

  testTree.invert();

  assert.equal(testTree.root.left.value, 1);
});

QUnit.test("Test 133: child nodes of the root's right node in an inverted tree will also have their left and right values swapped", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-2);
  testTree.add(2);
  testTree.add(-1);
  testTree.add(-3);

  testTree.invert()

  assert.equal(testTree.root.right.value, -2);
  assert.equal(testTree.root.right.right.value, -3);
  assert.equal(testTree.root.right.left.value, -1);
});

QUnit.test("Test 134: child nodes of the root's left node in an inverted tree will also have their left and right values swapped", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-2);
  testTree.add(2);
  testTree.add(1);
  testTree.add(3);

  testTree.invert()

  assert.equal(testTree.root.left.value, 2);
  assert.equal(testTree.root.left.left.value, 3);
  assert.equal(testTree.root.left.right.value, 1);
});

QUnit.test("Test 135: an arbitrarily complex tree can be correctly inverted", assert => {
  const testTree = createTestTree();

  testTree.invert()

  assert.equal(testTree.root.value, 0);
  assert.equal(testTree.root.right.value, -4);
  assert.equal(testTree.root.left.value, 8);
  assert.equal(testTree.root.right.right.value, -8);
  assert.equal(testTree.root.right.left.value, -2);
  assert.equal(testTree.root.left.right.value, 6);
  assert.equal(testTree.root.left.left.value, 12);
  assert.equal(testTree.root.right.right.left.value, -5);
  assert.equal(testTree.root.right.left.left.value, -1);
  assert.equal(testTree.root.right.right.right.value, -10);
  assert.equal(testTree.root.left.right.left.value, 7);
  assert.equal(testTree.root.left.right.right.value, 5);
  assert.equal(testTree.root.left.left.right.value, 10);
  assert.equal(testTree.root.left.left.left.value, 14);
  assert.equal(testTree.root.left.right.right.right.value, 2);
  assert.equal(testTree.root.left.right.right.right.left.value, 4);
});

QUnit.test("Test 136: inverting a tree twice returns a tree to its pre-inverted state", assert => {
  const testTree = createTestTree();
  const comparisonTree = createTestTree();

  testTree.invert();
  assert.notDeepEqual(testTree, comparisonTree);
  testTree.invert();

  assert.deepEqual(testTree, comparisonTree);
});

