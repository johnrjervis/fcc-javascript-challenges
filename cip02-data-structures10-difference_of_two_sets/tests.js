// Tests from previous challenges are also called in test.html
// These were the basic set class and its union and intersection methods, so the tests for those act as regression tests

QUnit.test("Test 27: the difference method returns a Set object", assert => {
  const firstSet = new Set();
  const secondSet = new Set();
  assert.true(firstSet.difference(secondSet) instanceof Set);
});

QUnit.test("Test 28: the difference method returns a Set containing objects from the set that the difference method is called on", assert => {
  const firstSet = new Set();
  firstSet.add("a");
  firstSet.add("b");
  const secondSet = new Set();
  const differenceSet = firstSet.difference(secondSet);
  assert.deepEqual(differenceSet.values(), ["a", "b"]);
});

QUnit.test("Test 29: the difference of two Sets does not contain elements that are in both Sets", assert => {
  const firstSet = new Set();
  firstSet.add("a");
  firstSet.add("b");
  const secondSet = new Set();
  secondSet.add("b");
  const differenceSet = firstSet.difference(secondSet)
  assert.deepEqual(differenceSet.values(), ["a"]);
});

QUnit.test("Test 30: the difference of two Sets does not contain elements that are in the second Set (i.e. the one passed as an argument to the difference method)", assert => {
  const firstSet = new Set();
  firstSet.add("a");
  const secondSet = new Set();
  secondSet.add("c");
  const differenceSet = firstSet.difference(secondSet)
  assert.deepEqual(differenceSet.values(), ["a"]);
});
