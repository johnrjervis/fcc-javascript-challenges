const testItem1 = "test #1";
const testItem2 = "test #2";
const testItem3 = "test #3";

QUnit.test("Test 31: removeAt(0) returns null if the list is empty", assert => {
  //console.log("test 31");
  const testList = new LinkedList();

  assert.equal(testList.removeAt(0), null);
});

QUnit.test("Test 32: removeAt(0) returns the head of the list if the list is not empty", assert => {
  //console.log("test 32");
  const testList = new LinkedList();
  testList.add(testItem1);

  assert.equal(testList.removeAt(0), testItem1);
});

QUnit.test("Test 33: removeAt(1) returns null if there is only one element in the list", assert => {
  //console.log("test 33");
  const testList = new LinkedList();

  testList.add(testItem1);

  assert.equal(testList.removeAt(1), null);
});

QUnit.test("Test 34: removeAt(1) returns the second item in a two-element list", assert => {
  //console.log("test 34");
  const testList = new LinkedList();
  testList.add(testItem1);
  testList.add(testItem2);

  assert.equal(testList.removeAt(1), testItem2);
});

QUnit.test("Test 35: removeAt(-1) returns null", assert => {
  const testList = new LinkedList();
  assert.equal(testList.removeAt(-1), null);
  testList.add(testItem1);

  assert.equal(testList.removeAt(-1), null);
})

QUnit.test("Test 36: valid removeAt requests decrease a linked list's length by 1", assert => {
  const testList = new LinkedList();
  testList.add(testItem1);
  testList.add(testItem2);
  assert.equal(testList.size(), 2);
  testList.removeAt(1);
  assert.equal(testList.size(), 1);

  testList.removeAt(0);

  assert.equal(testList.size(), 0);
})

QUnit.test("Test 37: an invalid removeAt request does not alter a linked list's length", assert => {
  const testList = new LinkedList();
  testList.add(testItem1);
  assert.equal(testList.size(), 1);

  testList.removeAt(-1);

  assert.equal(testList.size(), 1);

  testList.removeAt(2);

  assert.equal(testList.size(), 1);
})

QUnit.test("Test 38: calling removeAt(0) multiple times returns the list elements in the order that they were added", assert => {
  const testList = new LinkedList();

  testList.add(testItem1);
  testList.add(testItem2);
  testList.add(testItem3);

  assert.equal(testList.removeAt(0), testItem1)
  assert.equal(testList.removeAt(0), testItem2)
  assert.equal(testList.removeAt(0), testItem3)
})

QUnit.test("Test 39: calling removeAt multiple times with a non-zero argument returns the correct element", assert => {
  const testList = new LinkedList();

  testList.add(testItem1);
  testList.add(testItem2);
  testList.add(testItem3);

  assert.equal(testList.removeAt(1), testItem2)
  assert.equal(testList.removeAt(1), testItem3)
})

QUnit.test("Test 40: removeAt(0) returns null when the list has been exhausted", assert => {
  const testList = new LinkedList();

  testList.add(testItem1);
  testList.add(testItem2);
  testList.add(testItem3);
  testList.removeAt(0);
  testList.removeAt(0);
  testList.removeAt(0);

  assert.equal(testList.removeAt(0), null)
})

