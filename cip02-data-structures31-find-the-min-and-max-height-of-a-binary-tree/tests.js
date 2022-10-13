QUnit.test("Test 40: findMaxHeight should return -1 for an empty tree", assert => {
  const testTree = new BinarySearchTree();

  assert.equal(testTree.findMaxHeight(), -1);
});

QUnit.test("Test 41: findMaxHeight should return 0 for a tree that only contains a root node", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);

  assert.equal(testTree.findMaxHeight(), 0);
});

QUnit.test("Test 42: findMaxHeight should return 1 for a tree that contains a root node with one child node on the left side", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-1);

  assert.equal(testTree.findMaxHeight(), 1);
});

QUnit.test("Test 43: findMaxHeight should return 2 for a tree that contains a root node a left-side child node that has a child on its own left-side", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-1);
  testTree.add(-2);

  assert.equal(testTree.findMaxHeight(), 2);
});

QUnit.test("Test 44: findMaxHeight should return 1 for a tree that contains a root node with one child node on the right side", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(1);

  assert.equal(testTree.findMaxHeight(), 1);
});

QUnit.test("Test 45: findMaxHeight should return 1 for a tree that contains a root node with one child node on the right side and another one on the left side", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-1);
  testTree.add(1);

  assert.equal(testTree.findMaxHeight(), 1);
});

QUnit.test("Test 46: findMaxHeight should return 4 for an arbitrarily complex tree that contains a root node with four depth layers of child nodes", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(1); // first layer on right side
  testTree.add(-1); // first layer on left side
  testTree.add(-2); // second layer on left side
  testTree.add(-3); // third layer on left side
  testTree.add(2); // second layer on right side
  testTree.add(4); // third layer on right side
  testTree.add(3); // fourth layer on right side
  testTree.add(5); // fourth layer on right side

  assert.equal(testTree.findMaxHeight(), 4);
});

QUnit.test("Test 47: findMinHeight should return -1 for an empty tree", assert => {
  const testTree = new BinarySearchTree();

  assert.equal(testTree.findMinHeight(), -1);
});

QUnit.test("Test 48: findMinHeight should return 0 for a tree that only contains a root node", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);

  assert.equal(testTree.findMinHeight(), 0);
});

QUnit.test("Test 49: findMinHeight should return 0 for a tree that contains a root node with one child node on the left side", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-1);

  assert.equal(testTree.findMinHeight(), 0);
});

QUnit.test("Test 50: findMinHeight should return 0 for a tree that contains a root node with one child node on the right side", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(1);

  assert.equal(testTree.findMinHeight(), 0);
});

QUnit.test("Test 51: findMinHeight should return 1 for a tree that contains a root node with one child node on the right side and another one on the left side", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-1);
  testTree.add(1);

  assert.equal(testTree.findMinHeight(), 1);
});

QUnit.test("Test 52: findMinHeight should return 2 for an arbitrarily complex tree that contains leaf node that terminates on the second depth layer", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(2); // first layer on right side
  testTree.add(-2); // first layer on left side
  testTree.add(-1); // second layer on left side
  testTree.add(-3); // second layer on left side
  testTree.add(-4); // third layer on left side
  testTree.add(1); // second layer on right side
  testTree.add(3); // second layer on right side
  testTree.add(4); // third layer on right side
  testTree.add(5); // fourth layer on right side

  assert.equal(testTree.findMinHeight(), 2);
});

QUnit.test("Test 53: isBalanced should return true for a tree that is empty", assert => {
  const testTree = new BinarySearchTree();

  assert.true(testTree.isBalanced());
});

QUnit.test("Test 54: isBalanced should return true for a tree that contains a root node with one child node on the left side", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-1);

  assert.true(testTree.isBalanced());
});

QUnit.test("Test 55: isBalanced should return true for a tree that contains a root node with one child node on the right side", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(1);

  assert.true(testTree.isBalanced());
});


QUnit.test("Test 56: isBalanced should return true for a tree that contains a root node with one child node on the right side and another one on the left side", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-1);
  testTree.add(1);

  assert.true(testTree.isBalanced());
});

QUnit.test("Test 56: isBalanced should return false for a tree that contains a root node with no child nodes on the right side and two depth layers of child nodes on the left side", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-1);
  testTree.add(-2);

  assert.false(testTree.isBalanced());
});