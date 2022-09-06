QUnit.test("Test 1: hash table initialises with an empty collection", assert => {
  const testTable = new HashTable();
  assert.deepEqual(testTable.collection, {});
});

QUnit.test("Test 2: the hash function returns a value based on the string provided to it", assert => {
  const testHash = hash("test!");
  assert.equal(testHash, 481);
});

QUnit.test("Test 3: the hash function returns the same value for the same combination of letters", assert => {
  assert.equal(hash("yendor"), hash("rodney"));
});

QUnit.test("Test 4: key-value pairs are added to a hash table's collection under the key's hash code", assert => {
  const testTable = new HashTable();
  testTable.add("test key", "test item");
  assert.equal(hash("test key"), 809);
  assert.deepEqual(testTable.collection, {809: {"test key": "test item"}});
});

QUnit.test("Test 5: lookup returns the value for a key that is present in the hash table's collection", assert => {
  const testTable = new HashTable();
  testTable.add("test key", "test item");
  assert.equal(testTable.lookup("test key"), "test item");
});

QUnit.test("Test 6: lookup returns null if an item is not in the hash table's collection", assert => {
  const testTable = new HashTable();
  assert.equal(testTable.lookup(hash("test")), null);
});

QUnit.test("Test 7: lookup returns the correct value when multiple items are present in a hash table's collection", assert => {
  const testTable = new HashTable();
  testTable.add("test key", "test item");
  testTable.add("another key", "another item");
  assert.equal(testTable.lookup("test key"), "test item");
  assert.equal(testTable.lookup("another key"), "another item");
});

QUnit.test("Test 8: items can be removed from the hash table", assert => {
  const testTable = new HashTable();
  testTable.add("test key", "test item");
  testTable.remove("test key");
  assert.deepEqual(testTable.collection, {});
});

QUnit.test("Test 9: the remove method should only remove the relevant items", assert => {
  const testTable = new HashTable();
  testTable.add("test key", "test item");
  testTable.add("another key", "another item");
  testTable.remove("test key");
  assert.deepEqual(testTable.collection, {1114: {"another key": "another item"}});
});

QUnit.test("Test 10: multiple items may be stored for the same hash value", assert => {
  const testTable = new HashTable();
  testTable.add("test key", "test item");
  testTable.add("ttk eyes", "another item");
  assert.deepEqual(testTable.collection, {809: {"test key": "test item", "ttk eyes": "another item"}});
});

QUnit.test("Test 11: lookup should return the correct item even in the event of a collision", assert => {
  const testTable = new HashTable();
  testTable.add("test key", "test item");
  testTable.add("ttk eyes", "another item");
  assert.equal(testTable.lookup("ttk eyes"), "another item");
});

QUnit.test("Test 12: remove should only affect the correct item if there is a collision", assert => {
  const testTable = new HashTable();
  testTable.add("test key", "test item");
  testTable.add("ttk eyes", "another item");
  testTable.remove("ttk eyes");
  assert.deepEqual(testTable.collection, {809: {"test key": "test item"}});
});

QUnit.test("Test 13: it should not be possible to look up an item that has been removed", assert => {
  const testTable = new HashTable();
  testTable.add("test key", "test item");
  testTable.add("ttk eyes", "another item");
  testTable.remove("ttk eyes");
  assert.equal(testTable.lookup("ttk eyes"), null);
});

