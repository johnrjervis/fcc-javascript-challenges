QUnit.test("Test 1: isSorted returns true for a list of values in ascending order", assert => {
  const testArray = [0, 1, 2, 3, 4];

  assert.true(isSorted(testArray));
});


QUnit.test("Test 2: isSorted returns false for a list of values that is not in ascending order", assert => {
  const testArray = [0, 1, 3, 2, 4];

  assert.false(isSorted(testArray));
});

QUnit.test("Test 3: createRandomArray creates an array with the length specified by the function's argument", assert => {
  const testArray = createRandomArray(10);

  assert.equal(testArray.length, 10);
});

QUnit.test("Test 4: a large array created with createRandomArray is highly unlikely to be sorted", assert => {
  const testArray = createRandomArray(25);

  assert.false(isSorted(testArray));
});

QUnit.test("Test 5: it is highly unlikely all elements in an array created with createRandomArray will have the same value", assert => {
  const testArray = createRandomArray(10);

  // note that every stops as soon as the callback function returns false for any element
  assert.false(testArray.every(function (elem) {return elem === testArray[0]}));
});

QUnit.test("Test 6: A new min heap should be empty on initialisation", assert => {
  const testHeap = new MinHeap();

  assert.deepEqual(testHeap.heap, []);
});

QUnit.test("Test 7: After the first number is inserted into a heap, print returns a one-element list with that number as the list's only value", assert => {
  const testHeap = new MinHeap();

  testHeap.insert(0);

  assert.deepEqual(testHeap.heap, [0]);
});

QUnit.test("Test 8: If items are inserted in ascending order, their order is not changed in the heap", assert => {
  const testHeap = new MinHeap();

  testHeap.insert(0);
  testHeap.insert(1);
  testHeap.insert(2);

  assert.deepEqual(testHeap.heap, [0, 1, 2]);
});

QUnit.test("Test 9: swap can be used to exchange the positions of two items in a heap", assert => {
  const testHeap = new MinHeap();
  testHeap.insert(0);
  testHeap.insert(1);
  assert.deepEqual(testHeap.heap, [0, 1]);

  testHeap.swap(0, 1);

  assert.deepEqual(testHeap.heap, [1, 0]);
});

QUnit.test("Test 10: parent should return 1 for the argument 3", assert => {
  const testHeap = new MinHeap();

  assert.equal(testHeap.parent(3), 1);
});

QUnit.test("Test 11: parent should return 2 for the argument 6", assert => {
  const testHeap = new MinHeap();

  assert.equal(testHeap.parent(6), 2);
});

QUnit.test("Test 12: calling minHeapifyUp(1) on a two-item heap will not change the heap if the first item's value is less than the second value", assert => {
  const testHeap = new MinHeap();
  // cannot use the insert method because that should sort items as they are added to the heap
  testHeap.heap.push(0);
  testHeap.heap.push(1);
  assert.deepEqual(testHeap.heap, [0, 1]);

  testHeap.minHeapifyUp(1);

  assert.deepEqual(testHeap.heap, [0, 1]);
});

QUnit.test("Test 13: calling minHeapifyUp(1) on a two-item heap will reverse the heap if the first item's value is greater than the second value", assert => {
  const testHeap = new MinHeap();
  testHeap.heap.push(1);
  testHeap.heap.push(0);
  assert.deepEqual(testHeap.heap, [1, 0]);

  testHeap.minHeapifyUp(1);

  assert.deepEqual(testHeap.heap, [0, 1]);
});

QUnit.test("Test 14: calling minHeapifyUp with the heap length - 1 on a heap will place the last element of an array according to the rules for a min heap", assert => {
  const testHeap = new MinHeap();
  testHeap.heap.push(0); // root
  testHeap.heap.push(2); // 1st child (l)
  testHeap.heap.push(3); // 1st child (r)
  testHeap.heap.push(5); // 2nd child (l-l)
  testHeap.heap.push(4); // 2nd child (l-r)
  testHeap.heap.push(7); // 2nd child (r-l)
  testHeap.heap.push(6); // 2nd child (r-r)
  testHeap.heap.push(1); // 3rd child (l-l-l)
  assert.deepEqual(testHeap.heap, [0, 2, 3, 5, 4, 7, 6, 1]);

  testHeap.minHeapifyUp(testHeap.heap.length - 1);

  assert.deepEqual(testHeap.heap, [0, 1, 3, 2, 4, 7, 6, 5]);
});

QUnit.test("Test 15: If the second item inserted into a heap is less than the root node value, their positions within the heap will be swapped", assert => {
  const testHeap = new MinHeap();
  testHeap.insert(1);

  testHeap.insert(0);

  assert.deepEqual(testHeap.heap, [0, 1]);
});

QUnit.test("Test 16: For a heap with a root and one child, inserting a value that is less than the existing child value but greater than the root value will place the new value at the end of the heap", assert => {
  const testHeap = new MinHeap();
  testHeap.insert(0);
  testHeap.insert(2);

  testHeap.insert(1);

  assert.deepEqual(testHeap.heap, [0, 2, 1]);
});

QUnit.test("Test 17: Inserting a value that is lower than all of the existing values in a heap will cause that value to become the new root of the heap", assert => {
  const testHeap = new MinHeap();
  testHeap.insert(1);
  testHeap.insert(2);
  testHeap.insert(3);

  testHeap.insert(0);

  assert.equal(testHeap.heap[0], 0);
});

QUnit.test("Test 18: Inserting a value that is greater than the root value but less than the root's child values will result in the value being swapped through the heap's levels until it becomes the root's first child", assert => {
  const testHeap = new MinHeap();
  testHeap.insert(0); // root
  testHeap.insert(2); // first child (left)
  testHeap.insert(3); // first child (right)
  testHeap.insert(4); // second child (left-left)
  testHeap.insert(5); // second child (left-right)
  testHeap.insert(6); // second child (right-left)
  testHeap.insert(7); // second child (right-right)

  testHeap.insert(1); // should be swapped with the second-level first child (4) and then the root's first child (2)

  assert.deepEqual(testHeap.heap, [0, 1, 3, 2, 5, 6, 7, 4]);
});

QUnit.test("Test 19: Inserting a value that is less than all the values on a full last level but greater than values of the preceding level will create a new last level and the value will becoming the first child on the level above the new last level", assert => {
  const testHeap = new MinHeap();
  testHeap.insert(0); // root
  testHeap.insert(1); // first child (left)
  testHeap.insert(2); // first child (right)
  testHeap.insert(4); // second child (left-left)
  testHeap.insert(5); // second child (left-right)
  testHeap.insert(6); // second child (right-left)
  testHeap.insert(7); // second child (right-right)

  testHeap.insert(3); // should become a new child of the root's first left child node

  assert.deepEqual(testHeap.heap, [0, 1, 2, 3, 5, 6, 7, 4]);
});

QUnit.test("Test 20: remove should return the root value of a heap", assert => {
  const testHeap = new MinHeap();
  testHeap.insert(2);
  testHeap.insert(1);
  testHeap.insert(0);

  assert.equal(testHeap.remove(), 0);
});

QUnit.test("Test 21: Removing the only value in a heap causes the heap to be empty", assert => {
  const testHeap = new MinHeap();
  testHeap.insert(0);

  testHeap.remove();

  assert.deepEqual(testHeap.heap, []);
});

QUnit.test("Test 22: Calling remove on a heap with a root with one child node will result in the child becoming the new root", assert => {
  const testHeap = new MinHeap();
  testHeap.insert(0);
  testHeap.insert(1);

  testHeap.remove();

  assert.deepEqual(testHeap.heap, [1]);
});

QUnit.test("Test 23: Using getMinChild on the root node returns 1 if the root's first child has the lowest value of its two children", assert => {
  const testHeap = new MinHeap();
  testHeap.insert(0);
  testHeap.insert(1);
  testHeap.insert(2);

  assert.equal(testHeap.getMinChild(0), 1);
});

QUnit.test("Test 24: Using getMinChild on the root node returns 2 if the root's second child has the lowest value of its two children", assert => {
  const testHeap = new MinHeap();
  testHeap.insert(0);
  testHeap.insert(2);
  testHeap.insert(1);

  assert.equal(testHeap.getMinChild(0), 2);
});

QUnit.test("Test 25: Using getMinChild on the root node returns 1 if the root node only has one child", assert => {
  const testHeap = new MinHeap();
  testHeap.insert(0);
  testHeap.insert(1);

  assert.equal(testHeap.getMinChild(0), 1);
});

QUnit.test("Test 26: If a root with two children is removed, the second of the two children will become the new root if it is less than the first", assert => {
  const testHeap = new MinHeap();
  testHeap.insert(0);
  testHeap.insert(2);
  testHeap.insert(1);

  testHeap.remove();

  assert.deepEqual(testHeap.heap, [1, 2]);
});

QUnit.test("Test 27: If a root with two children is removed, the first of the two children will become the new root if it is less than the second child", assert => {
  const testHeap = new MinHeap();
  testHeap.insert(0);
  testHeap.insert(1);
  testHeap.insert(2);

  testHeap.remove();

  assert.deepEqual(testHeap.heap, [1, 2]);
});

QUnit.test("Test 28: For a heap with a root and two levels of children, remove produces the expected result", assert => {
  const testHeap = new MinHeap();
  testHeap.insert(0); // root
  testHeap.insert(1); // first child (left)
  testHeap.insert(2); // first child (right)
  testHeap.insert(3); // second child (left-left)
  testHeap.insert(4); // second child (left-right)
  testHeap.insert(5); // second child (right-left)
  testHeap.insert(7); // second child (right-right)
  assert.deepEqual(testHeap.heap, [0, 1, 2, 3, 4, 5, 7]);

  testHeap.remove(); // should be promoted to root, then swapped with 1, then 3

  assert.deepEqual(testHeap.heap, [1, 3, 2, 7, 4, 5]);
});

QUnit.test("Test 29: Remove produces the expected result for an arbitrarily complex tree whose values where not inserted in ascending order and that has an incomplete final level", assert => {
  const testHeap = new MinHeap();
  testHeap.insert(0); // root
  testHeap.insert(2); // first child (left)
  testHeap.insert(1); // first child (right)
  testHeap.insert(5); // second child (left-left)
  testHeap.insert(3); // second child (left-right)
  testHeap.insert(6); // second child (right-left)
  testHeap.insert(4); // second child (right-right)
  testHeap.insert(9); // third child (left-left-left)
  testHeap.insert(7); // third child (left-left-left)
  testHeap.insert(8); // third child (left-left-left)

  const removed = testHeap.remove(); 
  // should be swapped with the right first child (1) and then the right-right second child (4)

  assert.equal(removed, 0);
  assert.deepEqual(testHeap.heap, [1, 2, 4, 5, 3, 6, 8, 9, 7]);
});

QUnit.test("Test 30: When no values have been inserted into a heap, the heap sort method should return an empty array", assert => {
  const testHeap = new MinHeap();

  const sorted = testHeap.sort();

  assert.deepEqual(sorted, []);

});

QUnit.test("Test 31: When one value has been inserted into a min heap, the heap sort method should a one-element array containing that value", assert => {
  const testHeap = new MinHeap();
  testHeap.insert(0);

  const sorted = testHeap.sort();

  assert.deepEqual(sorted, [0]);
});

QUnit.test("Test 32: When two elements have been inserted into a heap in ascending order, the heap sort method should return an array with those values in ascending order", assert => {
  const testHeap = new MinHeap();
  testHeap.insert(0);
  testHeap.insert(1);

  const sorted = testHeap.sort();

  assert.deepEqual(sorted, [0, 1]);
});

QUnit.test("Test 33: When two elements have been inserted into a heap in descending order, sort should return an array with those values in ascending order", assert => {
  const testHeap = new MinHeap();
  testHeap.insert(1);
  testHeap.insert(0);

  const sorted = testHeap.sort();

  assert.deepEqual(sorted, [0, 1]);
});

QUnit.test("Test 34: When several values are inserted into the heap in neither ascending nor descending order, sort should return an array with the values of the array in ascending order", assert => {
  const testHeap = new MinHeap();
  testHeap.insert(1);
  testHeap.insert(0);
  testHeap.insert(2);
  testHeap.insert(4);
  testHeap.insert(3);

  const sorted = testHeap.sort();

  assert.deepEqual(sorted, [0, 1, 2, 3, 4]);
});

QUnit.test("Test 35: When passed a randomised array with 25 elements, sort should an array 25 values in ascending order", assert => {
  const testHeap = new MinHeap();
  const randArray = createRandomArray(25);
  for (const value of randArray) {
    testHeap.insert(value);
  }

  const sorted = testHeap.sort();

  assert.true(isSorted(sorted));
  assert.equal(sorted.length, 25);
});

