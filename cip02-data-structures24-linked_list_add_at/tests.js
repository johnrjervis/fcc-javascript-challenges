const testItem1 = "test #1";
const testItem2 = "test #2";
const testItem3 = "test #3";

QUnit.test("Test 41: addAt(-1, element) returns false", assert => {
  const testList = new LinkedList();

  assert.equal(testList.addAt(-1, testItem1), false);
});

QUnit.test("Test 42: addAt returns false if the supplied index is greater than the length of the list", assert => {
  const testList = new LinkedList();
  testList.add(testItem1);

  assert.equal(testList.addAt(2, testItem1), false);
});

QUnit.test("Test 43: addAt returns true when an element is successfully added to a linked list", assert => {
  /* The description for this challenge only specifies the return value (false) for failed requests
  It seems logical that the method should return true for a successful request, but this may not be necessary */
  const testList = new LinkedList();

  testList.add(testItem1);

  assert.equal(testList.addAt(1, testItem2), true);
});

QUnit.test("Test 44: a successful addAt request increases the length of a linked list", assert => {
  const testList = new LinkedList();
  assert.equal(testList.size(), 0);

  testList.addAt(0, testItem1)

  assert.equal(testList.size(), 1);
});

QUnit.test("Test 45: an unsuccessful addAt request does not change the length of a linked list", assert => {
  const testList = new LinkedList();
  assert.equal(testList.size(), 0);

  testList.addAt("test #1");

  assert.equal(testList.size(), 0);
})

QUnit.test("Test 46: addAt(0, element) places the element at the head of the linked list", assert => {
  const testList = new LinkedList();
  assert.equal(testList.head(), null);

  testList.addAt(0, testItem1);
  const listHead = testList.head()

  assert.equal(listHead.element, testItem1);
})

QUnit.test("Test 47: addAt(1, element) adds an element to the end of a one-element linked list", assert => {
  const testList = new LinkedList();
  testList.add(testItem1);

  testList.addAt(1, testItem2);
  const listHead = testList.head();
  const secondElement = listHead.next

  assert.equal(secondElement.element, testItem2);
})

QUnit.test("Test 48: if a linked list is not empty an element added to the start of the list gains the list's previous head as its next property", assert => {
  const testList = new LinkedList();

  testList.add(testItem1);
  testList.addAt(0, testItem2);
  const listHead = testList.head();

  assert.equal(listHead.next.element, testItem1)
})

QUnit.test("Test 49: addAt can insert elements into the middle of a multi-element list", assert => {
  const testList = new LinkedList();

  testList.add(testItem1);
  testList.add(testItem2);
  testList.addAt(1, testItem3);
  const firstItem = testList.head();
  const secondItem = firstItem.next;
  const thirdItem = secondItem.next;

  assert.equal(firstItem.element, testItem1)
  assert.equal(secondItem.element, testItem3)
  assert.equal(thirdItem.element, testItem2)
})
/*
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
*/
