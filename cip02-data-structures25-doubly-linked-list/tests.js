const item1 = "first item";
const item2 = "second item";
const item3 = "third item";

// DL = Doubly Linked

QUnit.test("Test 1: DL lists are created empty", assert => {
  const testList = new DoublyLinkedList();

  assert.equal(testList.head, null);
  assert.equal(testList.tail, null);
});

QUnit.test("Test 2: Items are added to a doubly linked list as a node objects", assert => {
  const testList = new DoublyLinkedList();

  testList.add(item1);

  assert.true(testList.head instanceof Node);
});

QUnit.test("Test 3: The argument passed to add is set as the new item's data attribute", assert => {
  const testList = new DoublyLinkedList();

  testList.add(item1);

  assert.equal(testList.head.data, item1);
});

QUnit.test("Test 4: The item at the head of a DL list has a null 'prev' property", assert => {
  const testList = new DoublyLinkedList();

  testList.add(item1);

  assert.equal(testList.head.prev, null);
});

QUnit.test("Test 5: Items added after the head of a DL list do not replace the head", assert => {
  const testList = new DoublyLinkedList();

  testList.add(item1);
  testList.add(item2);

  assert.equal(testList.head.data, item1);
});

QUnit.test("Test 6: The second item in a DL list should be the head's 'next' property", assert => {
  const testList = new DoublyLinkedList();

  testList.add(item1);
  testList.add(item2);

  assert.equal(testList.head.next.data, item2);
});

QUnit.test("Test 7: Multiple items can be added after the head of a DL list; each item will be the previous items next property", assert => {
  const testList = new DoublyLinkedList();

  testList.add(item1);
  testList.add(item2);
  testList.add(item3);

  const listHeadItem = testList.head;
  assert.equal(listHeadItem.data, item1);
  const listSecondItem = listHeadItem.next;
  assert.equal(listSecondItem.data, item2);
  const listThirdItem = listSecondItem.next;
  assert.equal(listThirdItem.data, item3);
});

QUnit.test("Test 8: Items that are added to a DL list become the lists tail property", assert => {
  const testList = new DoublyLinkedList();

  testList.add(item1);

  assert.equal(testList.tail.data, item1);
  testList.add(item2);
  assert.equal(testList.tail.data, item2);
  testList.add(item3);
  assert.equal(testList.tail.data, item3);
});

QUnit.test("Test 9: Each item added after the head a DL list takes the previous item as its 'prev' property", assert => {
  const testList = new DoublyLinkedList();

  testList.add(item1);
  testList.add(item2);
  testList.add(item3);

  assert.equal(testList.tail.prev.data, item2);
  assert.equal(testList.tail.prev.prev.data, item1);
});

QUnit.test("Test 10: Attempting to remove an item from an empty DL list returns null", assert => {
  const testList = new DoublyLinkedList();

  assert.equal(testList.remove(item1), null);
});

QUnit.test("Test 11: Removing the only item in a DL list sets the head to null", assert => {
  const testList = new DoublyLinkedList();

  testList.add(item1);
  assert.notEqual(testList.head, null);
  testList.remove(item1);

  assert.equal(testList.head, null);
});

QUnit.test("Test 12: Removing the only item in a DL list sets the tail to null", assert => {
  const testList = new DoublyLinkedList();

  testList.add(item1);
  assert.notEqual(testList.tail, null);
  testList.remove(item1);

  assert.equal(testList.tail, null);
});

QUnit.test("Test 13: The head of a DL list should not change if it does not match the argument supplied to the remove method", assert => {
  const testList = new DoublyLinkedList();

  testList.add(item1);
  testList.remove(item2);

  assert.notEqual(testList.head, null);
  assert.equal(testList.head.data, item1);
});

QUnit.test("Test 14: If the head of a DL list is removed, the second item becomes the head of the list", assert => {
  const testList = new DoublyLinkedList();

  testList.add(item1);
  testList.add(item2);
  testList.remove(item1);

  assert.equal(testList.head.data, item2);
});

QUnit.test("Test 15: If the head of a DL list is removed, the second item becomes the new head", assert => {
  const testList = new DoublyLinkedList();

  testList.add(item1);
  testList.add(item2);
  testList.remove(item1);

  assert.equal(testList.head.data, item2);
});

QUnit.test("Test 16: If the tail of a DL list is removed, the penultimate item becomes the new tail", assert => {
  const testList = new DoublyLinkedList();

  testList.add(item1);
  testList.add(item2);
  testList.remove(item2);

  assert.equal(testList.tail.data, item1);
});

QUnit.test("Test 17: When the middle item of a three-item DL list is removed, the first item's next attribute links to the last item", assert => {
  const testList = new DoublyLinkedList();

  testList.add(item1);
  testList.add(item2);
  testList.add(item3);
  testList.remove(item2)

  assert.equal(testList.tail.prev, testList.head);
});

QUnit.test("Test 18: When an item is removed from the middle of a DL list, the links of the list are correctly adjusted", assert => {
  const testList = new DoublyLinkedList();

  testList.add(item1);
  testList.add(item2);
  testList.add(item3);
  testList.remove(item2)

  assert.equal(testList.head.data, item1);
  assert.equal(testList.tail.data, item3);
  assert.equal(testList.head.next, testList.tail);
  assert.equal(testList.tail.prev, testList.head);
});