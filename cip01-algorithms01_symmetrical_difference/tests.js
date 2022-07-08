QUnit.test("elemNotInArray should return true if the elem argument is not in the array argument", assert => {
  assert.true(elemNotInArray(0, [1, 2]))
});

QUnit.test("elemNotInArray should return false if the elem argument is in the array argument", assert => {
  assert.false(elemNotInArray(1, [1, 2]))
});

QUnit.test("If diffTwoArrays arguments have no common elements, the result should be the sum of the lists", assert => {
  assert.deepEqual(diffTwoArrays([0], [1]), [0, 1]);
});

QUnit.test("If diffTwoArrays arguments have one common element, the result should not contain the common element", assert => {
  assert.deepEqual(diffTwoArrays([1, 2], [2, 3, 4]), [1, 3, 4]);
});

QUnit.test("If the first array passed to diffTwoArrays contains a repeated element, the result should only contain one occurance of that element", assert => {
  assert.deepEqual(sym([1, 1, 2], []), [1, 2]);
});

QUnit.test("If the second array passed to diffTwoArrays contains a repeated element, the result should only contain one occurance of that element", assert => {
  assert.deepEqual(sym([], [1, 1, 2]), [1, 2]);
});

QUnit.test("sym should produce the same result as diffTwoArrays is passed two arrays", assert => {
  assert.deepEqual(sym([1], [2]), diffTwoArrays([1], [2]))
});

QUnit.test("sym should be able to handle an argument list of three arrays", assert => {
  assert.deepEqual(sym([1], [2], [3]), [1, 2, 3])
});

QUnit.test("sym should work on each pair of arrays in turn", assert => {
  assert.deepEqual(sym([1, 2, 3], [2, 3, 4], [2, 3]), [1, 4, 2, 3])
});