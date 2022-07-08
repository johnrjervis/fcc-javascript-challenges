QUnit.test("Test 1: binarySearch should return an array containing only the central value if it is equal to the search value", assert => {
  // can just return [2];
  assert.deepEqual(binarySearch([1, 2, 3], 2), [2]);
});

QUnit.test("Test 2: binarySearch should return an array containing only the left-of-centre value of an even array if it is equal to the search value", assert => {
  // can just return [value];
  assert.deepEqual(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 4), [4]);
});

QUnit.test("Test 3: the first value in the array returned by binarySearch should be the central value of an array even if it is not equal to the search value", assert => {
  // now have to return the central value; 
  assert.equal(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)[0], 5);
});

QUnit.test("Test 4: if the value sought is midway between the start and the centre of the array, binarySearch should return [central value, search value]", assert => {
  // now using recursion;
  assert.deepEqual(binarySearch([1, 2, 3, 4, 5, 6, 7], 2), [4, 2]);
});

QUnit.test("Test 5: if the value sought is midway between the end and the central of the array, binarySearch should return [central value, search value]", assert => {
  // now have to have an if-else clause to select the higher or lower part of the array;
  assert.deepEqual(binarySearch([1, 2, 3, 4, 5, 6, 7], 6), [4, 6]);
});

QUnit.test("Test 6: binarySearch should eventually find a value even if it requires multiple steps seeking above and below the intermediate step values", assert => {
  // just checking, no code change needed;
  assert.deepEqual(
    binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 10),
    [8, 12, 10]
  );
});

QUnit.test("Test 7: binarySearch should return 'Value not found' if the search value is not in the array", assert => {
  // now need to check whether the array fails to find the value;
  assert.equal(
    binarySearch([1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15], 8),
    'Value Not Found'
  );
});

// fCC tests

const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];
