QUnit.test("Test 117: getMinChild returns the child node with the smallest value in a tree when starting with the root node", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-4); // first level left side
  testTree.add(2); // first level right side
  testTree.add(-2); // second level left side
  testTree.add(-8); // second level left side
  testTree.add(4); // second level right side
  testTree.add(1); // second level right side
  testTree.add(-5); // third level left side

  assert.deepEqual(testTree.getMinChild(testTree.root), testTree.root.left.left);
});

QUnit.test("Test 118: getMinChild returns the child node with the smallest value in the right branch of a tree when starting with the root node's right child", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-4); // first level left side
  testTree.add(2); // first level right side
  testTree.add(-2); // second level left side
  testTree.add(-8); // second level left side
  testTree.add(4); // second level right side
  testTree.add(1); // second level right side
  testTree.add(-5); // third level left side

  assert.deepEqual(testTree.getMinChild(testTree.root.right), testTree.root.right.left);
});

QUnit.test("Test 119: getMinChild returns the child node with the smallest value in the left branch of a tree when starting with the root node's left child", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-4); // first level left side
  testTree.add(2); // first level right side
  testTree.add(-2); // second level left side
  testTree.add(-8); // second level left side
  testTree.add(4); // second level right side
  testTree.add(1); // second level right side
  testTree.add(-5); // third level left side

  assert.deepEqual(testTree.getMinChild(testTree.root.left), testTree.root.left.left);
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

QUnit.test("Test 123: When the root node is removed, all children on the left branch will be preserved", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-4); // first child level on left side
  testTree.add(1); // first child level on right side
  testTree.add(-2); // second child level on left side
  testTree.add(-8); // second child level on left side
  testTree.add(-3); // third child level on left side

  testTree.remove(0)

  assert.equal(testTree.root.left.value, -4);
  assert.equal(testTree.root.left.left.value, -8);
  assert.equal(testTree.root.left.right.value, -2);
  assert.equal(testTree.root.left.right.left.value, -3);
});

QUnit.test("Test 124: If the root node only has a chain of right-sided children on its right side, this chain will be preserved with the first right child becoming the new root", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-1); // first child level on left side
  testTree.add(1); // first child level on right side
  testTree.add(2); // second child level on right side
  testTree.add(3); // third child level on right side
  testTree.add(4); // fourth child level on right side
  //displayTree(testTree);
  testTree.remove(0)
  //displayTree(testTree);

  assert.equal(testTree.root.value, 1);
  assert.equal(testTree.root.right.value, 2);
  assert.equal(testTree.root.right.right.value, 3);
  assert.equal(testTree.root.right.right.right.value, 4);
});

QUnit.test("Test 125: removing the root node's right child from an arbitrarily complex tree gives the expected result", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(8); // first layer on right side
  testTree.add(-2); // first layer on left side
  testTree.add(-1); // second layer on left side
  testTree.add(-3); // second layer on left side
  testTree.add(-4); // third layer on left side
  testTree.add(12); // second layer on right side
  testTree.add(6); // second layer on right side
  testTree.add(7); // fourth layer on right side
  testTree.add(5); // fourth layer on right side
  testTree.add(10); // fourth layer on right side
  testTree.add(2); // fifth layer on right side
  testTree.add(14); // fifth layer on right side
  testTree.remove(8);

  assert.equal(testTree.root.right.value, 12);
  assert.equal(testTree.root.right.right.value, 14);
  assert.equal(testTree.root.right.left.value, 10);
  assert.equal(testTree.root.right.left.left.value, 6);

});

QUnit.test("Test 126: removing the root node's left child from an arbitrarily complex tree gives the expected result", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(8); // first layer on right side
  testTree.add(-2); // first layer on left side
  testTree.add(-1); // second layer on left side
  testTree.add(-3); // second layer on left side
  testTree.add(-4); // third layer on left side
  testTree.add(12); // second layer on right side
  testTree.add(6); // second layer on right side
  testTree.add(7); // fourth layer on right side
  testTree.add(5); // fourth layer on right side
  testTree.add(10); // fourth layer on right side
  testTree.add(2); // fifth layer on right side
  testTree.add(14); // fifth layer on right side
  testTree.remove(-2);

  assert.equal(testTree.root.left.value, -1);
  assert.equal(testTree.root.left.left.value, -3);
  assert.equal(testTree.root.left.left.left.value, -4);

});

/*QUnit.test("Test 127: it is possible to remove nodes with two children from the middle of an arbitrarily complex tree", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(8); // first layer on right side
  testTree.add(-2); // first layer on left side
  testTree.add(-1); // second layer on left side
  testTree.add(-3); // second layer on left side
  testTree.add(-4); // third layer on left side
  testTree.add(12); // second layer on right side
  testTree.add(6); // second layer on right side
  testTree.add(7); // fourth layer on right side
  testTree.add(5); // fourth layer on right side
  testTree.add(10); // fourth layer on right side
  testTree.add(2); // fifth layer on right side
  assert.equal(testTree.root.left.left.value, -3)
  assert.equal(testTree.root.right.right.value, 2)

  testTree.remove(-3);
  testTree.remove(2);

  assert.equal(testTree.root.left.left.value, -4);
  assert.equal(testTree.root.right.right.value, 4)
});
*/
