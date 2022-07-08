// Tests from previous challenges are also called in test.html
// These were the basic set class and its union, intersection and difference methods, so the tests for those act as regression tests

QUnit.test("Test 31: the isSubsetOf method returns a boolean", assert => {
  const firstSet = new Set();
  const secondSet = new Set();
  assert.true(firstSet.isSubsetOf(secondSet));
});

QUnit.test("Test 32: isSubset returns false if the Set contains an element that is not in the set it is supposed to be a subset of", assert => {
  const firstSet = new Set();
  firstSet.add("a");
  const secondSet = new Set();
  assert.false(firstSet.isSubsetOf(secondSet));
});

QUnit.test("Test 33: a set is a subset of another set that contains the same values (as well as other values)", assert => {
  const firstSet = new Set();
  firstSet.add("a");
  firstSet.add("b");
  const secondSet = new Set();
  secondSet.add("a");
  secondSet.add("b");
  secondSet.add("c");
  assert.true(firstSet.isSubsetOf(secondSet));
});

QUnit.test("Test 34: a set is not a subset of another set that is missing one of the first set's values", assert => {
  const firstSet = new Set();
  firstSet.add("a");
  firstSet.add("b");
  firstSet.add("c");
  firstSet.add("d");
  const secondSet = new Set();
  secondSet.add("a");
  secondSet.add("c");
  secondSet.add("d");
  assert.false(firstSet.isSubsetOf(secondSet));
});
