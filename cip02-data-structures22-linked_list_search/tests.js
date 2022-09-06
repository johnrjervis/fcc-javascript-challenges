QUnit.test("Test 21: isEmpty returns true if a linked list is empty", assert => {
  const testList = new LinkedList();

  assert.true(testList.isEmpty());
});

QUnit.test("Test 22: isEmpty returns false if a linked list contains any elements", assert => {
  const testList = new LinkedList();

  testList.add("test #1");

  assert.false(testList.isEmpty());
});

QUnit.test("Test 23: removing the only item in an linked list means isEmpty returns true", assert => {
  const testList = new LinkedList();

  testList.add("test #1");
  testList.remove("test #1");

  assert.true(testList.isEmpty());
});

QUnit.test("Test 24: indexOf should return 0 if the sought item is at the head of the list", assert => {
  const testList = new LinkedList();

  testList.add("test #1");
  testList.add("test #2");

  assert.equal(testList.indexOf("test #1"), 0);
})

QUnit.test("Test 25: indexOf returns the correct index for any item in the linked list", assert => {
  const testList = new LinkedList();

  testList.add("test @ index 0");
  testList.add("test @ index 1");
  testList.add("test @ index 2");

  assert.equal(testList.indexOf("test @ index 1"), 1);
  assert.equal(testList.indexOf("test @ index 2"), 2);
})

QUnit.test("Test 26: indexOf returns undefined if the sought item is not in the linked list", assert => {
  const testList = new LinkedList();

  testList.add("test #1");
  testList.add("test #2");
  testList.add("test #3");

  assert.equal(testList.indexOf("test #4"), -1);
})

QUnit.test("Test 27: elementAt(0) returns the head element", assert => {
  const testList = new LinkedList();

  testList.add("test @ index 0");
  testList.add("test @ index 1");
  testList.add("test @ index 2");

  assert.equal(testList.elementAt(0), "test @ index 0")
})

QUnit.test("Test 28: elementAt returns the correct element for a range of arguments", assert => {
  const testList = new LinkedList();

  testList.add("test @ index 0");
  testList.add("test @ index 1");
  testList.add("test @ index 2");

  assert.equal(testList.elementAt(1), "test @ index 1")
  assert.equal(testList.elementAt(2), "test @ index 2")
})

QUnit.test("Test 29: elementAt returns undefined if the index argument is beyond the end of the list", assert => {
  const testList = new LinkedList();

  testList.add("test @ index 0");
  testList.add("test @ index 1");
  testList.add("test @ index 2");

  assert.equal(testList.elementAt(3), undefined)
})

QUnit.test("Test 30: elementAt returns undefined if the index argument is negative", assert => {
  const testList = new LinkedList();

  testList.add("test @ index 0");
  testList.add("test @ index 1");
  testList.add("test @ index 2");

  assert.equal(testList.elementAt(-1), undefined)
})

