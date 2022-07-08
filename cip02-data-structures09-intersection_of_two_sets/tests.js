// Tests from previous challenges are also called in test.html
// These were the basic set class and its union method, so the tests for that act as regression tests

QUnit.test("Test 24: the intersection method returns a Set object", assert => {
  const testSet = new Set();
  const secondSet = new Set();
  assert.true(testSet.intersection(secondSet) instanceof Set);
});

QUnit.test("Test 25: a Set object returned by union contains elements from the two sets it is made up of", assert => {
  const firstSet = new Set();
  firstSet.add("a");
  firstSet.add("b");
  const secondSet = new Set();
  secondSet.add("a");
  secondSet.add("b");
  const intersectionSet = firstSet.intersection(secondSet);
  assert.deepEqual(intersectionSet.values(), ["a", "b"]);
});

QUnit.test("Test 26: an intersection Set only contains elements that are in both of the sets that it is drawn from", assert => {
  const firstSet = new Set();
  firstSet.add("a");
  firstSet.add("b");
  const secondSet = new Set();
  secondSet.add("b");
  secondSet.add("c");
  const intersectionSet = firstSet.intersection(secondSet)
  assert.deepEqual(intersectionSet.values(), ["b"]);
});
