QUnit.test("Test 1: the Set class initialises with an empty dictionary and a length property that is zero", assert => {
  const testSet = new Set();
  assert.deepEqual(testSet.dictionary, {});
  assert.equal(testSet.length, 0);
});

QUnit.test("Test 2: the add method adds any item to an empty set", assert => {
  const testSet = new Set();
  testSet.add("1st");
  assert.deepEqual(testSet.dictionary, {"1st": "1st"});
});

QUnit.test("Test 3: adding an item to a set increases its length value by 1", assert => {
  const testSet = new Set(3);
  testSet.add("1st");
  assert.equal(testSet.length, 1);
});

QUnit.test("Test 4: the add method returns true when an item is added to a set", assert => {
  const testSet = new Set();
  assert.true(testSet.add("1st"));
});

QUnit.test("Test 5: the add method will add a new item to a set if it is not already in the set", assert => {
  const testSet = new Set();
  testSet.add("1st");
  testSet.add("2nd");
  assert.deepEqual(testSet.dictionary, {"1st": "1st", "2nd": "2nd"});
});

QUnit.test("Test 6: the has method returns true if its argument is an item that is in the set", assert => {
  const testSet = new Set();
  testSet.add("1st");
  assert.true(testSet.has("1st"));
});

QUnit.test("Test 7: the has method returns false if its argument is an item that is not in the set", assert => {
  const testSet = new Set();
  assert.false(testSet.has("1st"));
});

QUnit.test("Test 8: repeats of existing items cannot be added to a set", assert => {
  const testSet = new Set();
  testSet.add("1st");
  testSet.add("1st");
  assert.deepEqual(testSet.dictionary, {"1st": "1st"});
});

QUnit.test("Test 9: a set's length does not increase when an attempt is made to add a repeat item", assert => {
  const testSet = new Set();
  testSet.add("1st");
  testSet.add("1st");
  assert.equal(testSet.length, 1);
});

QUnit.test("Test 10: the add method returns false if it cannot add an item to a set", assert => {
  const testSet = new Set();
  testSet.add("1st");
  assert.false(testSet.add("1st"));
});

QUnit.test("Test 11: the remove method removes an item from a set", assert => {
  const testSet = new Set();
  testSet.add("1st");
  testSet.remove("1st");
  assert.deepEqual(testSet.dictionary, {});
});

QUnit.test("Test 12: when an item is removed from a set, other set items are unnaffected", assert => {
  const testSet = new Set();
  testSet.add("1st");
  testSet.add("2nd");
  testSet.remove("1st");
  assert.deepEqual(testSet.dictionary, {"2nd": "2nd"});
});

QUnit.test("Test 13: attempting to remove an item that is not in a set does not affect the set", assert => {
  const testSet = new Set();
  testSet.add("1st");
  testSet.remove("2nd");
  assert.deepEqual(testSet.dictionary, {"1st": "1st"});
});

QUnit.test("Test 14: removing an item that is in a set returns true", assert => {
  const testSet = new Set();
  testSet.add("1st");
  assert.true(testSet.remove("1st"));
});

QUnit.test("Test 15: attempting to remove an item that is not in a set returns false", assert => {
  const testSet = new Set();
  assert.false(testSet.remove("1st"));
});

QUnit.test("Test 16: successfully removing an item should reduce a set's length property", assert => {
  const testSet = new Set();
  testSet.add("1st");
  assert.equal(testSet.length, 1)
  testSet.remove("1st");
  assert.equal(testSet.length, 0)
});

QUnit.test("Test 17: unsuccessfully attempting to remove an item should not affect a set's length", assert => {
  const testSet = new Set();
  testSet.add("1st");
  assert.equal(testSet.length, 1);
  testSet.remove("2nd");
  assert.equal(testSet.length, 1);
});

QUnit.test("Test 18: the size method should return the length of a Set", assert => {
  const testSet = new Set();
  assert.equal(testSet.size(), 0);
  testSet.add("1st");
  assert.equal(testSet.size(), 1);
  testSet.add("2nd");
  assert.equal(testSet.size(), 2);
  testSet.remove("1st");
  assert.equal(testSet.size(), 1);
  testSet.remove("2nd");
  assert.equal(testSet.size(), 0);
});