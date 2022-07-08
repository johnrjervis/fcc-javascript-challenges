// Tests from previous challenge are also called in test.html
// This was the basic set class, so the tests for that act as regression tests

QUnit.test("Test 19: the union method return a Set object", assert => {
  const testSet = new Set();
  const secondSet = new Set();
  assert.true(testSet.union(secondSet) instanceof Set);
});

QUnit.test("Test 20: a Set object returned by union contains the same elements as its parent Set", assert => {
  const firstSet = new Set();
  firstSet.add("a");
  firstSet.add("b");
  const secondSet = new Set();
  const unionSet = firstSet.union(secondSet);
  assert.deepEqual(unionSet.values(), ["a", "b"]);
});

QUnit.test("Test 21: The union method adds elements from another set", assert => {
  const firstSet = new Set();
  firstSet.add("a");
  firstSet.add("b");
  const secondSet = new Set();
  secondSet.add("c");
  const unionSet = firstSet.union(secondSet)
  assert.deepEqual(unionSet.values(), ["a", "b", "c"]);
});

QUnit.test("Test 22: The union method does not add duplicate elements from another set", assert => {
  const firstSet = new Set();
  firstSet.add("a");
  firstSet.add("b");
  const secondSet = new Set();
  secondSet.add("b");
  const unionSet = firstSet.union(secondSet)
  assert.deepEqual(unionSet.values(), ["a", "b"]);
});

QUnit.test("Test 23: The union method correctly handles two sets with unique and repeated elements", assert => {
  const firstSet = new Set();
  firstSet.add("a");
  firstSet.add("b");
  firstSet.add("d");
  firstSet.add("f");
  const secondSet = new Set();
  secondSet.add("c");
  secondSet.add("d");
  secondSet.add("e");
  secondSet.add("f");
  const unionSet = firstSet.union(secondSet)
  assert.deepEqual(unionSet.values(), ["a", "b", "d", "f", "c", "e"]);
});