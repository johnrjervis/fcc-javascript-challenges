QUnit.test("Test 1: quickSort should return the input array unchanged if it is contains no elements", assert => {
  // tests the return criterion for the recursive function
  assert.deepEqual(quickSort([]), []);
});

QUnit.test("Test 2: quickhSort should return the input array unchanged if it is contains one element", assert => {
  // tests the return criterion for the recursive function
  assert.deepEqual(quickSort([1]), [1]);
});

QUnit.test("Test 3: quickSort should return the input array reversed if the second element is lower than the first element", assert => {
  // tests that the function produces the lower array
  // the function does not yet need to be recursive - it can return [lower, pivot]
  assert.deepEqual(quickSort([1, 0]), [0, 1]);
});

QUnit.test("Test 4: quickSort should return the input array reversed for more than two elements in descending order", assert => {
  // now move to recursively producing the lower array
  assert.deepEqual(quickSort([2, 1, 0]), [0, 1, 2]);
});

QUnit.test("Test 5: quickSort should return the input array unchanged if the second element is higher than the first element", assert => {
  // tests that the function produces the higher array
  // the function does not need to be recursive to do this - it can return [pivot, higher]
  assert.deepEqual(quickSort([0, 1]), [0, 1]);
});

QUnit.test("Test 6: quickSort should return an array unchanged if it is in ascending order)", assert => {
  // the function still doesn't need to handle the higher values recursively if they are all in ascending order
  assert.deepEqual(quickSort([1, 2, 3, 4]), [1, 2, 3, 4]);
});

QUnit.test("Test 7: quickSort should return a sorted array when passed an input array that contains values that are higher and lower than their preceding values", assert => {
  // now the function needs to handle the higher values recursively
  assert.deepEqual(quickSort([1, 2, 5, 7, 6, 3, 4]), [1, 2, 3, 4, 5, 6, 7]);
});

QUnit.test("Test 8: quickSort should sort an array that contains repeat values", assert => {
  // this should work without any further changes:
  // the if-else logic means that values that match pivot are passed to higher
  assert.deepEqual(quickSort([7, 6, 5, 1, 2, 3, 1, 4, 0]), [0, 1, 1, 2, 3, 4, 5, 6, 7]);
});