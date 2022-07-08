QUnit.test("Test 1: insertionSort should return an array unchanged if it is in ascending order", assert => {
  // can just return the original array
  assert.deepEqual(insertionSort([1, 2, 3, 4]), [1, 2, 3, 4]);
});

QUnit.test("Test 2: insertionSort should sort a two-element array in reverse order", assert => {
  // Just need a single loop to do this
  assert.deepEqual(insertionSort([3, 2]), [2, 3]);
});

QUnit.test("Test 3: If the last value is the lowest, insertionSort should move this to the start of the array", assert => {
  // need a double loop to do this
  assert.equal(insertionSort([4, 3, 2])[0], 2);
});

QUnit.test("Test 4: inselectionSort should sort an array into ascending order", assert => {
  // also need a double loop through the array
  assert.deepEqual(insertionSort([7, 6, 5, 1, 2, 3, 1, 4, 0]), [0, 1, 1, 2, 3, 4, 5, 6, 7]);
});
