QUnit.test("Test 1: add will add a key value pair to a map's collection", assert => {
  const testMap = new Map();
  testMap.add("test", "item");
  assert.deepEqual(testMap.collection, {"test": "item"});
});

QUnit.test("Test 2: remove will remove an item from a map's collection", assert => {
  const testMap = new Map();
  testMap.add("test", "item");
  testMap.remove("test");
  assert.deepEqual(testMap.collection, {});
});

QUnit.test("Test 3: remove leaves other items in a map's collection", assert => {
  const testMap = new Map();
  testMap.add("test key", "item");
  testMap.add("another key", "another item");
  testMap.remove("test key");
  assert.deepEqual(testMap.collection, {"another key": "another item"});
});

QUnit.test("Test 4: when passed a valid key from a map's collection, get returns the corresponding value", assert => {
  const testMap = new Map();
  testMap.add("test", "item");
  assert.equal(testMap.get("test"), "item");
});

QUnit.test("Test 5: has returns true when passed the key of an item in a map's collection", assert => {
  const testMap = new Map();
  testMap.add("test", "item");
  assert.true(testMap.has("test"));
});

QUnit.test("Test 6: has returns false when passed a key of an item that is not in a map's collection", assert => {
  const testMap = new Map();
  assert.false(testMap.has("test"));
});

QUnit.test("Test 7: values returns an empty array if a map's collection has no items", assert => {
  const testMap = new Map();
  assert.deepEqual(testMap.values(), []);
});

QUnit.test("Test 8: values returns all of the values in a map's collection", assert => {
  const testMap = new Map();
  testMap.add("test", "item");
  testMap.add("another key", "another item");
  assert.deepEqual(testMap.values(), ["item", "another item"]);
});

QUnit.test("Test 9: size returns 0 if a map's collection is empty", assert => {
  const testMap = new Map();
  assert.equal(testMap.size(), 0);
});

QUnit.test("Test 10: size returns number of items in a map's collection", assert => {
  const testMap = new Map();
  testMap.add("test", "item");
  testMap.add("another key", "another item");
  assert.equal(testMap.size(), 2);
});

QUnit.test("Test 11: clear empties a map's collection", assert => {
  const testMap = new Map();
  testMap.add("test", "item");
  testMap.add("another key", "another item");
  testMap.clear();
  assert.equal(testMap.size(), 0);
});

