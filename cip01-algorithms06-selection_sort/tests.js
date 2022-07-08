QUnit.test("Test 1: selectionSort should return an array unchanged if it is in ascending order", assert => {
  // can just return the original array
  assert.deepEqual(selectionSort([1, 2, 3, 4]), [1, 2, 3, 4]);
});

QUnit.test("Test 2: The first element in the array returned by selectionSort should be the lowest value in the input array", assert => {
  // need a single loop through the array to move the lowest value to the start
  assert.equal(selectionSort([7, 6, 5, 1, 2, 3, 4, 0])[0], 0);
});

QUnit.test("Test 3: selectionSort should not alter the length of an array", assert => {
  // further testing on a single loop
  assert.equal(selectionSort([7, 6, 5, 1, 2, 3, 4, 0]).length, 8);
});

QUnit.test("Test 4: selectionSort should sort an array into ascending order", assert => {
  // need a double loop through the array
  assert.deepEqual(selectionSort([7, 6, 5, 1, 2, 3, 1, 4, 0]), [0, 1, 1, 2, 3, 4, 5, 6, 7]);
});
