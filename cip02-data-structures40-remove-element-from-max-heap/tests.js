QUnit.test("Test 9: remove should return the root value of a heap", assert => {
  const testHeap = new MaxHeap();
  testHeap.insert(2);
  testHeap.insert(1);
  testHeap.insert(0);

  assert.equal(testHeap.remove(), 2);
});

QUnit.test("Test 10: Removing the only value in a heap causes the heap to be empty", assert => {
  const testHeap = new MaxHeap();
  testHeap.insert(0);

  testHeap.remove();

  assert.deepEqual(testHeap.print(), []);
});

QUnit.test("Test 11: Calling remove on a heap with a root with one child node will result in the child becoming the new root", assert => {
  const testHeap = new MaxHeap();
  testHeap.insert(1);
  testHeap.insert(0);

  testHeap.remove();

  assert.deepEqual(testHeap.print(), [0]);
});

QUnit.test("Test 12: Using getMaxChild on the root node returns 1 if the root's first child has the highest value of its two children", assert => {
  const testHeap = new MaxHeap();
  testHeap.insert(2);
  testHeap.insert(1);
  testHeap.insert(0);

  assert.equal(testHeap.getMaxChild(0), 1);
});

QUnit.test("Test 13: Using getMaxChild on the root node returns 2 if the root's second child has the highest value of its two children", assert => {
  const testHeap = new MaxHeap();
  testHeap.insert(2);
  testHeap.insert(0);
  testHeap.insert(1);

  assert.equal(testHeap.getMaxChild(0), 2);
});

QUnit.test("Test 14: Using getMaxChild on the root node returns 1 if the root node only has one child", assert => {
  const testHeap = new MaxHeap();
  testHeap.insert(2);
  testHeap.insert(0);

  assert.equal(testHeap.getMaxChild(0), 1);
});

QUnit.test("Test 15: If a root with two children is removed, the second of the two children will become the new root if it is greater than the first", assert => {
  const testHeap = new MaxHeap();
  testHeap.insert(2);
  testHeap.insert(0);
  testHeap.insert(1);

  testHeap.remove();

  assert.deepEqual(testHeap.print(), [1, 0]);
});

QUnit.test("Test 16: If a root with two children is removed, the first of the two children will become the new root if it is greaer than the second child", assert => {
  const testHeap = new MaxHeap();
  testHeap.insert(2);
  testHeap.insert(1);
  testHeap.insert(0);

  testHeap.remove();

  assert.deepEqual(testHeap.print(), [1, 0]);
});

QUnit.test("Test 17: For a heap with a root and two levels of children, remove produces the expected result", assert => {
  const testHeap = new MaxHeap();
  testHeap.insert(8); // root
  testHeap.insert(7); // first child (left)
  testHeap.insert(5); // first child (right)
  testHeap.insert(4); // second child (left-left)
  testHeap.insert(3); // second child (left-right)
  testHeap.insert(2); // second child (right-left)
  testHeap.insert(1); // second child (right-right)
  assert.deepEqual(testHeap.print(), [8, 7, 5, 4, 3, 2, 1]);

  testHeap.remove();

  assert.deepEqual(testHeap.print(), [7, 4, 5, 1, 3, 2]);
});

QUnit.test("Test 18: Remove produces the expected result for an arbitrarily complex tree whose values where not inserted in descending order and that has an incomplete final level", assert => {
  const testHeap = new MaxHeap();
  testHeap.insert(10); // root
  testHeap.insert(8); // first child (left)
  testHeap.insert(9); // first child (right)
  testHeap.insert(5); // second child (left-left)
  testHeap.insert(7); // second child (left-right)
  testHeap.insert(4); // second child (right-left)
  testHeap.insert(6); // second child (right-right)
  testHeap.insert(1); // third child (left-left-left)
  testHeap.insert(3); // third child (left-left-left)
  testHeap.insert(2); // third child (left-left-left)

  const removed = testHeap.remove(); 
  // should be swapped with the right first child (9) and then the right-right second child (6)

  assert.equal(removed, 10);
  assert.deepEqual(testHeap.print(), [9, 8, 6, 5, 7, 4, 2, 1, 3]);
});
