QUnit.test("Test 23: isPresent should return false for any search if the tree is empty", assert => {
  const testTree = new BinarySearchTree();

  assert.false(testTree.isPresent(0));
});

QUnit.test("Test 24: for a one-node tree, isPresent should return false if its argument is different from the root node's value", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);

  assert.false(testTree.isPresent(1));
});

QUnit.test("Test 25: isPresent should return true if its argument is equal to the root node's value", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);

  assert.true(testTree.isPresent(0));
});

QUnit.test("Test 26: isPresent should return true if its argument is equal to the value of the root node's left child", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-1);

  assert.true(testTree.isPresent(-1));
});

QUnit.test("Test 27: isPresent should return true if its argument is equal to the value of the root node's right child", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(1);

  assert.true(testTree.isPresent(1));
});

QUnit.test("Test 28: isPresent should return false if its argument is not equal to the value of any of the root node's children", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(1);
  testTree.add(4);
  testTree.add(6);
  testTree.add(2);
  testTree.add(3);
  testTree.add(7);
  testTree.add(8);

  assert.false(testTree.isPresent(5));
});

QUnit.test("Test 29: isPresent returns true when looking for a value that is present in an arbitrarily complex tree", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(1);
  testTree.add(4);
  testTree.add(6);
  testTree.add(2);
  testTree.add(3);
  testTree.add(7);
  testTree.add(15);
  testTree.add(10);
  testTree.add(12);
  testTree.add(14);
  testTree.add(5);
  testTree.add(11);
  testTree.add(13);
  testTree.add(16);
  testTree.add(9);
  testTree.add(8);

  assert.true(testTree.isPresent(8));
});