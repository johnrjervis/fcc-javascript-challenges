QUnit.test("Test 1: print should return an empty list if no elements have been added to the heap", assert => {
  const testHeap = new MaxHeap();

  assert.deepEqual(testHeap.print(), []);
});

QUnit.test("Test 2: After the first number is inserted into a heap, print returns a one-element list with the number as the list's only value", assert => {
  const testHeap = new MaxHeap();

  testHeap.insert(0);

  assert.deepEqual(testHeap.print(), [0]);
});

QUnit.test("Test 3: If items are inserted in descending order, their order is not changed in the heap", assert => {
  const testHeap = new MaxHeap();

  testHeap.insert(2);
  testHeap.insert(1);
  testHeap.insert(0);

  assert.deepEqual(testHeap.print(), [2, 1, 0]);
});

QUnit.test("Test 4: If the second item inserted into a heap is greater than the root node value, their positions within the heap will be swapped", assert => {
  const testHeap = new MaxHeap();
  testHeap.insert(0);

  testHeap.insert(1);

  assert.deepEqual(testHeap.print(), [1, 0]);
});

QUnit.test("Test 5: For a heap with a root and one child, inserting a value that is greater than the existing child value but less than the root value will place the new value at the end of the heap", assert => {
  const testHeap = new MaxHeap();
  testHeap.insert(2);
  testHeap.insert(0);

  testHeap.insert(1);

  assert.deepEqual(testHeap.print(), [2, 0, 1]);
});

QUnit.test("Test 6: Inserting a value that is higher than all of the existing values in a heap will cause that value to become the new root of the heap", assert => {
  const testHeap = new MaxHeap();
  testHeap.insert(2);
  testHeap.insert(1);
  testHeap.insert(0);

  testHeap.insert(3);

  assert.equal(testHeap.print()[0], 3);
});

QUnit.test("Test 7: Inserting a value that is less than the root value but greater than the root's child values will result in the value being swapped through the heap's levels until it becomes the root's first child", assert => {
  const testHeap = new MaxHeap();
  testHeap.insert(8); // root
  testHeap.insert(6); // first child (left)
  testHeap.insert(5); // first child (right)
  testHeap.insert(4); // second child (left-left)
  testHeap.insert(3); // second child (left-right)
  testHeap.insert(2); // second child (right-left)
  testHeap.insert(1); // second child (right-right)

  testHeap.insert(7); // should be swapped with the second-level first child (4) and then the root's first child (6)

  assert.deepEqual(testHeap.print(), [8, 7, 5, 6, 3, 2, 1, 4]);
});

QUnit.test("Test 8: Inserting a value that is greater than the last level of child nodes but less than the preceding level will result in the new value becoming the first child on the lowest level ", assert => {
  const testHeap = new MaxHeap();
  testHeap.insert(8); // root
  testHeap.insert(7); // first child (left)
  testHeap.insert(6); // first child (right)
  testHeap.insert(4); // second child (left-left)
  testHeap.insert(3); // second child (left-right)
  testHeap.insert(2); // second child (right-left)
  testHeap.insert(1); // second child (right-right)

  testHeap.insert(5); // should become a new child of the root's first left child node

  assert.deepEqual(testHeap.print(), [8, 7, 6, 5, 3, 2, 1, 4]);
});
