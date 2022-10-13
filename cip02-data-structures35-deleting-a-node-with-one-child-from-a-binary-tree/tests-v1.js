QUnit.test("Test 106: if the root node is removed, an only child on the left side will become the new root node", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-1);

  testTree.remove(0)

  assert.equal(testTree.root.value, -1);
});

QUnit.test("Test 107: if the root node is removed, an only child on the right side will become the new root node", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(1);

  testTree.remove(0)

  assert.equal(testTree.root.value, 1);
});

QUnit.test("Test 109: a left-side node that has been removed can be replaced by its left child", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-1);
  testTree.add(-2);

  testTree.remove(-1);

  assert.equal(testTree.root.left.value, -2);
});

QUnit.test("Test 110: a left-side node that has been removed can be replaced by its right child", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-2);
  testTree.add(-1);
  //displayTree(testTree);
  testTree.remove(-2);
  //displayTree(testTree);
  assert.equal(testTree.root.left.value, -1);
});

QUnit.test("Test 111: a right-side node that has been removed can be replaced by its right child", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(1);
  testTree.add(2);

  testTree.remove(1);

  assert.equal(testTree.root.right.value, 2);
});

QUnit.test("Test 112: a right-side node that has been removed can be replaced by its left child", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(2);
  testTree.add(1);

  testTree.remove(2);

  assert.equal(testTree.root.right.value, 1);
});

QUnit.test("Test 113: it is possible to remove nodes in the middle of an arbitrarily complex tree", assert => {
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
  assert.equal(testTree.root.left.left.value, -3)
  assert.equal(testTree.root.right.right.value, 2)

  testTree.remove(-3);
  testTree.remove(2);

  assert.equal(testTree.root.left.left.value, -4);
  assert.equal(testTree.root.right.right.value, 4)
});