/* After finding out that helper methods are not allowed (given the "// only change code below/above this line" comments) these tests are for a refactor of the first version which did include a helper function */

QUnit.test("Test 1: bubbleSort should return an array unchanged if it is in ascending order", assert => {
  // Bubble sort just needs to return its argument
  assert.deepEqual(bubbleSort([1, 2, 3, 4]), [1, 2, 3, 4]);
});

QUnit.test("Test 2: bubbleSort should return a reversed array when passed a two element array in descending order", assert => {
  assert.deepEqual(bubbleSort([1, 0]), [0, 1]);
});

QUnit.test("Test 3: bubbleSort should be able handle elements before the pair that is to be swapped", assert => {
  // Start using the index argument
  assert.deepEqual(bubbleSort([1, 3, 2]), [1, 2, 3]);
});

QUnit.test("Test 4: bubbleSort should be able to handle elements after the pair that is to be swapped", assert => {
  // Triangulation: the previous test can be passed by returning [1, 0]
  assert.deepEqual(bubbleSort([1, 3, 2, 4, 5]), [1, 2, 3, 4, 5]);
});

QUnit.test("Test 5: bubbleSort should be able to sort an array that only requires one sorting pass", assert => {
  assert.deepEqual(bubbleSort([1, 2, 4, 3, 5, 7, 6, 8]), [1, 2, 3, 4, 5, 6, 7, 8]);
});

QUnit.test("Test 6: bubbleSort should sort an array that requires multiple sorting passes", assert => {
  assert.deepEqual(bubbleSort([1, 2, 4, 5, 3, 7, 6, 8]), [1, 2, 3, 4, 5, 6, 7, 8]);
});