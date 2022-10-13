const item1 = "first item";
const item2 = "second item";
const item3 = "third item";

const createThreeItemList = () => {
  const newList = new DoublyLinkedList();
  newList.add(item1);
  newList.add(item2);
  newList.add(item3);

  return newList;
}

// DL = Doubly Linked

QUnit.test("Test 1: Reversing an empty DL list returns null", assert => {
  const testList = new DoublyLinkedList();

  assert.equal(testList.reverse(), null);
});

QUnit.test("Test 2: Reversing a DL list moves the item at the head of the list to the tail", assert => {
  const testList = createThreeItemList();

  testList.reverse();

  assert.equal(testList.tail.data, item1);
});

QUnit.test("Test 3: Reversing a DL list moves the item at the tail of the list to the head", assert => {
  const testList = createThreeItemList();

  testList.reverse();

  assert.equal(testList.head.data, item3);
});

QUnit.test("Test 4: The head of a reversed DL list should have a null 'prev' property", assert => {
  const testList = createThreeItemList();

  testList.reverse();

  assert.equal(testList.head.prev, null);
});

QUnit.test("Test 5: The head of a reversed three-item DL list should have the second item as its 'next' property", assert => {
  const testList = createThreeItemList();

  testList.reverse();

  assert.equal(testList.head.next.data, item2);
});

QUnit.test("Test 6: The second item of a reversed three-item DL list should have the (new) head item as its 'prev' property and the (new) tail item as its 'next' property", assert => {
  const testList = createThreeItemList();

  testList.reverse();
  middleItem = testList.head.next;

  assert.equal(middleItem.prev.data, item3);
  assert.equal(middleItem.next.data, item1);
});

QUnit.test("Test 7: The tail of a reversed DL list should have a null 'next' property", assert => {
  const testList = createThreeItemList();

  testList.reverse();

  assert.equal(testList.tail.next, null);
});

QUnit.test("Test 8: The tail of a reversed three-item DL list should have the second item as its 'prev' property", assert => {
  const testList = createThreeItemList();

  testList.reverse();

  assert.equal(testList.tail.prev.data, item2);
});