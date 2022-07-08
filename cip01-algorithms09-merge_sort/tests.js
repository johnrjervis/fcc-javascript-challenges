QUnit.test("Test 1: mergeSort should return the input array unchanged if it is contains no elements", assert => {
  assert.deepEqual(mergeSort([]), []);
});

QUnit.test("test 2: merge should combine two one-element arrays in order", assert => {
  assert.deepEqual(merge([0], [1]), [0, 1]);
});

QUnit.test("test 3: merge should combine two one-element arrays in ascending order", assert => {
  assert.deepEqual(merge([1], [0]), [0, 1]);
});

QUnit.test("test 4: merge should combine two sorted (ascending order) multi-element arrays with repeats", assert => {
  assert.deepEqual(
    merge([1, 4, 8], [2, 2, 3, 4, 5, 6, 7]),
    [1, 2, 2, 3, 4, 4, 5, 6, 7, 8]
  );
});

QUnit.test("test 5: mergeSort should return a sorted two-element array unchanged", assert => {
  assert.deepEqual(mergeSort([0, 1]), [0, 1]);
});

QUnit.test("test 6: mergeSort should sort a two-element array in descending order into ascending order", assert => {
  assert.deepEqual(mergeSort([1, 0]), [0, 1]);
});

QUnit.test("test 7: mergeSort should return a sorted three-element array unchanged", assert => {
  assert.deepEqual(mergeSort([0, 1, 2]), [0, 1, 2]);
});

QUnit.test("test 8: mergeSort should return a jumbled three-element array in ascending order", assert => {
  assert.deepEqual(mergeSort([1, 0, 2]), [0, 1, 2]);
});

QUnit.test("test 9: mergeSort should sort an eight-element array with repeats", assert => {
  assert.deepEqual(mergeSort([0, 1, 2, 5, 4, 3, 4, 1]), [0, 1, 1, 2, 3, 4, 4, 5]);
});