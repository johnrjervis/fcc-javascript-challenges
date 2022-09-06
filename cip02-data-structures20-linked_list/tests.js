QUnit.test("Test 1: a linked list initialises with no items", assert => {
  const testList = new LinkedList();

  assert.equal(testList.head(), null);
});

QUnit.test("Test 2: a linked list initialises with length equal to zero", assert => {
  const testList = new LinkedList();

  assert.equal(testList.size(), 0);
});

QUnit.test("Test 3: the first item added to a linked list is placed at the list's head", assert => {
  const testList = new LinkedList();

  testList.add("test #1");

  assert.equal(testList.head().element, "test #1");
});

QUnit.test("Test 4: adding a first item to a linked list causes its length to increase to one", assert => {
  const testList = new LinkedList();

  testList.add("test #1");

  assert.equal(testList.size(), 1);
});

QUnit.test("Test 5: items added after the first item are not put at the head of the list", assert => {
  const testList = new LinkedList();

  testList.add("test #1");
  testList.add("test #2");

  assert.notEqual(testList.head().element, "test #2");
});

QUnit.test("Test 6: the item at the head of a linked list is initialised without a next property", assert => {
  const testList = new LinkedList();

  testList.add("test #1");

  assert.equal(testList.head().next, null);
});

QUnit.test("Test 7: the second item added to a linked list is the next property of the first item", assert => {
  const testList = new LinkedList();

  testList.add("test #1");
  testList.add("test #2");

  assert.equal(testList.head().next.element, "test #2");
});

QUnit.test("Test 8: each subsequent item added to a linked list becomes the next property of the previous item", assert => {
  const testList = new LinkedList();

  testList.add("test #1");
  testList.add("test #2");
  testList.add("test #3");
  testList.add("test #4");
  const firstItem = testList.head();
  const secondItem = firstItem.next;
  const thirdItem = secondItem.next;
  const fourthItem = thirdItem.next;

  assert.equal(secondItem.element, "test #2");
  assert.equal(thirdItem.element, "test #3");
  assert.equal(fourthItem.element, "test #4");
});

QUnit.test("Test 9: each time an item is added to a linked list, its length increases by one", assert => {
  const testList = new LinkedList();

  testList.add("test #1");
  assert.equal(testList.size(), 1);

  testList.add("test #2");
  assert.equal(testList.size(), 2);

  testList.add("test #3");
  assert.equal(testList.size(), 3);

  testList.add("test #4");
  assert.equal(testList.size(), 4);
});
