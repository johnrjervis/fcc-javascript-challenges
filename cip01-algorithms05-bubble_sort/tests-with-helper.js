QUnit.test("Test 1: bubbleSort should return an array unchanged if it is in ascending order)", assert => {
  // Bubble sort just needs to return its argument
  assert.deepEqual(bubbleSort([1, 2, 3, 4]), [1, 2, 3, 4]);
});

QUnit.test("Test 2: swapAtIndex should return a reversed array when passed a two element array", assert => {
  // Starting with the helper functions
  assert.deepEqual(swapAtIndex([0, 1], 0), [1, 0]);
});

QUnit.test("Test 3: swapAtIndex should return a reversed array when passed a two element array", assert => {
  // Triangulation: the previous test can be passed by returning [1, 0]
  assert.deepEqual(swapAtIndex([1, 0], 0), [0, 1]);
});

QUnit.test("Test 4: swapAtIndex should be able handle elements before the pair that is to be swapped", assert => {
  // Start using the index argument
  assert.deepEqual(swapAtIndex([1, 2, 3], 1), [1, 3, 2]);
});

QUnit.test("Test 5: swapAtIndex should be able to handle elements after the pair that is to be swapped", assert => {
  // Triangulation: the previous test can be passed by returning [1, 0]
  assert.deepEqual(swapAtIndex([1, 2, 3, 4, 5], 1), [1, 3, 2, 4, 5]);
});

QUnit.test("Test 6: bubbleSort should be able to sort an array that only requires one sorting pass", assert => {
  assert.deepEqual(bubbleSort([1, 2, 4, 3, 5, 7, 6, 8]), [1, 2, 3, 4, 5, 6, 7, 8]);
});

QUnit.test("Test 7: bubbleSort should sort an array that requires multiple sorting passes", assert => {
  assert.deepEqual(bubbleSort([1, 2, 4, 5, 3, 7, 6, 8]), [1, 2, 3, 4, 5, 6, 7, 8]);
});