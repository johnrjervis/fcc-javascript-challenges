/*  In working on the algorithms exercises thus far, I've used lots of helper functions and tested each one individually. This time, I'm aiming to build tests for increasingly complex inputs until the function is generalised enough to solve the entire exercise. */

QUnit.test("Test 1: pairwise should return 0 if passed an array with two elements that do not add up to arg (i.e. the second argument)", assert => {
  // As the first test, this can be passed if pairwise returns 0
  assert.equal(pairwise([1, 2], 4), 0);
});

QUnit.test("Test 2: pairwise should return 1 if passed an array with two elements that do add up to the arg", assert => {
  // This can be passed if pairwise checks that arr[0] + arr[1] === arg
  // If not, it should return 0 so that test 1 still passes
  assert.equal(pairwise([1, 3], 4), 1);
});

QUnit.test("Test 3: pairwise should return the sum of the indices of consecutive elements that add up to arg", assert => {
  // Now the function needs to iterate once through the adjacent pairs in the array
  // The return value will be the sum of the indices of the two values that sum to arg
  assert.equal(pairwise([0, 1, 3], 4), 3);
});

QUnit.test("Test 4: pairwise should return the sum of the indices of any elements that add up to arg", assert => {
  // Now the function needs to iterate twice through the array
  // The return value will be the sum of the indices of the ith (loop 1) and jth (loop 2) values that sum to arg
  assert.equal(pairwise([1, 0, 3], 4), 2);
});

QUnit.test("Test 5: pairwise should handle multiple pairs that add up to arg", assert => {
  // An extra test: as it stands, the function should be able to handle this
  assert.equal(pairwise([1, 0, 5, 3, 4, 2, 2], 4), 19);
});

QUnit.test("Test 6: pairwise should not re-use elements when looking for pairs add up to arg - part 1", assert => {
  // The second loop should now track which elements have already been used
  assert.equal(pairwise([1, 1, 3], 4), 2);
});

QUnit.test("Test 7: pairwise should not re-use elements when looking for pairs add up to arg - part 2", assert => {
  // The first loop should skip on one if the ith element has already been used in a match
  assert.equal(pairwise([1, 3, 3], 4), 1);
});

QUnit.test("Test 8: pairwise should not re-use elements when looking for pairs add up to arg - part 3", assert => {
  // There's still one failure that can occur for matches at adjacent indices: 
  // The 2nd element in such a match can be re-used as the 1st element for other matches
  assert.equal(pairwise([1, 2, 1], 3), 1);
});

QUnit.test("Test 9: bothElemsNotInArray should return true if neither elem argument is in the supplied array", assert => {
  // Having set out to avoid helper functions, I've added one to tidy up the if statement
  // This means that an ugly triple condition test can be reduced to two
  // The helper tests whether either of the first two arguments are present in the array
  assert.true(bothElemsNotInArray(1, 2, [3, 4]));
});

QUnit.test("Test 10: bothElemsNotInArray should return false if the elem1 argument is in the supplied array", assert => {
  assert.false(bothElemsNotInArray(1, 2, [3, 4, 1]));
});

QUnit.test("Test 11: bothElemsNotInArray should return false if the elem2 argument is in the supplied array", assert => {
  assert.false(bothElemsNotInArray(1, 2, [3, 4, 2]));
});