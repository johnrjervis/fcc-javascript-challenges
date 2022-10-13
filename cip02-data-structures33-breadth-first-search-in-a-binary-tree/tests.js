QUnit.test("Test 78: levelOrder should return null for an empty list", assert => {
  const testTree = new BinarySearchTree();

  assert.equal(testTree.levelOrder(), null);
});

QUnit.test("Test 79: levelOrder should return [0] for a tree that only contains a root node with a value of 0", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);

  assert.deepEqual(testTree.levelOrder(), [0]);
});

QUnit.test("Test 80: levelOrder should return [0, -1] for a tree that contains a root node with one child node on the left side with values of 0 and -1 respectively", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-1);

  assert.deepEqual(testTree.levelOrder(), [0, -1]);
});

QUnit.test("Test 81: levelOrder should return [0, 1] for a tree that contains a root node with one child node on the right side with values of 0 and 1 respectively", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(1);

  assert.deepEqual(testTree.levelOrder(), [0, 1]);
});

QUnit.test("Test 82: levelOrder should return [0, -1, 1] for a tree that contains a root node with a value of 0 child nodes with values of -1 and 1", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(1);
  testTree.add(-1);

  assert.deepEqual(testTree.levelOrder(), [0, -1, 1]);
});

QUnit.test("Test 83: levelOrder should return the correct result for an arbitrarily complex tree", assert => {
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

  assert.deepEqual(testTree.levelOrder(), [0, -2, 1, -3, -1, 2, -4, 4, 3, 5]);
});

QUnit.test("Test 84: the left option for pushChild should not push anything to the queue for a node that has no children", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  const testQueue = []

  testTree.pushChild(testTree.root, testQueue, "left")

  assert.deepEqual(testQueue, []);
});

QUnit.test("Test 85: if the supplied node has a left child, the left option for pushChild should push that child node to the queue", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-1);
  const testQueue = []

  testTree.pushChild(testTree.root, testQueue, "left")

  assert.deepEqual(testQueue, [testTree.root.left]);
});

QUnit.test("Test 86: the left option for pushChild should not push anything to the queue for a node that has no children", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  const testQueue = []

  testTree.pushChild(testTree.root, testQueue, "right")

  assert.deepEqual(testQueue, []);
});

QUnit.test("Test 87: if the supplied node has a right child, the left option for pushChild should push that child node to the queue", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(1);
  const testQueue = []

  testTree.pushChild(testTree.root, testQueue, "right")

  assert.deepEqual(testQueue, [testTree.root.right]);
});

QUnit.test("Test 88: reverseLevelOrder should return null for an empty list", assert => {
  const testTree = new BinarySearchTree();

  assert.equal(testTree.reverseLevelOrder(), null);
});

QUnit.test("Test 89: reverseLevelOrder should return [0] for a tree that only contains a root node with a value of 0", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);

  assert.deepEqual(testTree.reverseLevelOrder(), [0]);
});

QUnit.test("Test 90: levelOrder should return [0, -1] for a tree that contains a root node with one child node on the left side with values of 0 and -1 respectively", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(-1);

  assert.deepEqual(testTree.reverseLevelOrder(), [0, -1]);
});

QUnit.test("Test 91: reverseLevelOrder should return [0, 1] for a tree that contains a root node with one child node on the right side with values of 0 and 1 respectively", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(1);

  assert.deepEqual(testTree.reverseLevelOrder(), [0, 1]);
});

QUnit.test("Test 92: reversLevelOrder should return [0, 1, -1] for a tree that contains a root node with a value of 0 child nodes with values of -1 and 1", assert => {
  const testTree = new BinarySearchTree();
  testTree.add(0);
  testTree.add(1);
  testTree.add(-1);

  assert.deepEqual(testTree.reverseLevelOrder(), [0, 1, -1]);
});

QUnit.test("Test 93: reverseLevelOrder should return the correct result for an arbitrarily complex tree", assert => {
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

  assert.deepEqual(testTree.reverseLevelOrder(), [0, 1, -2, 2, -1, -3, 4, -4, 5, 3]);
});