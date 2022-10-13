QUnit.test("Test 57: searchBase('preorder') should return null for an empty tree", assert => {
  const testTree = new BinarySearchTree();

  assert.equal(testTree.searchBase("preorder"), null);
});

QUnit.test("Test 58: searchBase('preorder') should return [0] for a tree that only contains a root node with a value of 0", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);

  assert.deepEqual(testTree.searchBase("preorder"), [0]);
});

QUnit.test("Test 59: searchBase('preorder') should return [0, -1] for a tree that contains a root node with one child node on the left side with values of 0 and -1 respectively", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-1);

  assert.deepEqual(testTree.searchBase("preorder"), [0, -1]);
});

QUnit.test("Test 60: searchBase('preorder') should return [0, 1] for a tree that contains a root node with one child node on the right side with values of 0 and 1 respectively", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(1);

  assert.deepEqual(testTree.searchBase("preorder"), [0, 1]);
});

QUnit.test("Test 61: searchBase('preorder') should return [0, -1, 1] for a tree that contains a root node with a value of 0 child nodes with values of -1 and 1", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(1);
  testTree.add(-1);

  assert.deepEqual(testTree.searchBase("preorder"), [0, -1, 1]);
});

QUnit.test("Test 62: searchBase('preorder') should return the correct result for an arbitrarily complex tree", assert => {
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

  assert.deepEqual(testTree.searchBase("preorder"), [0, -1, -2, -3, 1, 2, 4, 3, 5]);
});

QUnit.test("Test 63: preorder should return the same result as searchBase('preorder') for an arbitrarily complex tree", assert => {
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

  assert.deepEqual(testTree.searchBase("preorder"), testTree.preorder());
});

QUnit.test("Test 64: searchBase('postorder') should return null for an empty tree", assert => {
  const testTree = new BinarySearchTree();

  assert.equal(testTree.searchBase("postorder"), null);
});

QUnit.test("Test 65: searchBase('postorder') should return [0] for a tree that only contains a root node with a value of 0", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);

  assert.deepEqual(testTree.searchBase("postorder"), [0]);
});

QUnit.test("Test 66: searchBase('postorder') should return [-1, 0] for a tree that contains a root node with one child node on the left side with values of 0 and -1 respectively", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-1);

  assert.deepEqual(testTree.searchBase("postorder"), [-1, 0]);
});

QUnit.test("Test 67: searchBase('postorder') should return [1, 0] for a tree that contains a root node with one child node on the right side with values of 0 and 1 respectively", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(1);

  assert.deepEqual(testTree.searchBase("postorder"), [1, 0]);
});

QUnit.test("Test 68: searchBase('postorder') should return [-1, 1, 0] for a tree that contains a root node with a value of 0 child nodes with values of -1 and 1", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(1);
  testTree.add(-1);

  assert.deepEqual(testTree.searchBase("postorder"), [-1, 1, 0]);
});

QUnit.test("Test 69: searchBase('postorder') should return the correct result for an arbitrarily complex tree", assert => {
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

  assert.deepEqual(testTree.searchBase("postorder"), [-3, -2, -1, 3, 5, 4, 2, 1, 0]);
});

QUnit.test("Test 70: postorder should return the same result as searchBase('postorder') for an arbitrarily complex tree", assert => {
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

  assert.deepEqual(testTree.searchBase("preorder"), testTree.preorder());
});

QUnit.test("Test 71: searchBase('inorder') should return null for an empty tree", assert => {
  const testTree = new BinarySearchTree();

  assert.equal(testTree.searchBase("inorder"), null);
});

QUnit.test("Test 72: searchBase('inorder') should return [0] for a tree that only contains a root node with a value of 0", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);

  assert.deepEqual(testTree.searchBase("inorder"), [0]);
});

QUnit.test("Test 73: searchBase('inorder') should return [-1, 0] for a tree that contains a root node with one child node on the left side with values of 0 and -1 respectively", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-1);

  assert.deepEqual(testTree.searchBase("inorder"), [-1, 0]);
});

QUnit.test("Test 74: searchBase('postorder') should return [0, 1] for a tree that contains a root node with one child node on the right side with values of 0 and 1 respectively", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(1);

  assert.deepEqual(testTree.searchBase("inorder"), [0, 1]);
});

QUnit.test("Test 75: searchBase('inorder') should return [-1, 0, 1] for a tree that contains a root node with a value of 0 child nodes with values of -1 and 1", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(1);
  testTree.add(-1);

  assert.deepEqual(testTree.searchBase("inorder"), [-1, 0, 1]);
});

QUnit.test("Test 76: searchBase('inorder') should return the correct result for an arbitrarily complex tree", assert => {
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

  assert.deepEqual(testTree.searchBase("inorder"), [-3, -2, -1, 0, 1, 2, 3, 4, 5]);
});

QUnit.test("Test 77: inorder should return the same result as searchBase('inorder') for an arbitrarily complex tree", assert => {
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

  assert.deepEqual(testTree.searchBase("inorder"), testTree.inorder());
});