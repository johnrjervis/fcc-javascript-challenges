QUnit.test("Test 10: attempting to remove an item from an empty linked list should not change the list", assert => {
  console.log("test 10");
  const testList = new LinkedList();

  testList.remove("test #1");

  assert.equal(testList.head(), null);
});

QUnit.test("Test 11: attempting to remove an item from an empty linked list should not change the list's length", assert => {
  console.log("test 11");
  const testList = new LinkedList();

  testList.remove("test #1");

  assert.equal(testList.size(), 0);
});

QUnit.test("Test 12: attempting to remove a non-existent item does not change a linked list", assert => {
  console.log("test 12");
  const testList = new LinkedList();

  testList.add("test #1");
  testList.add("test #2");
  testList.remove("test #3");

  assert.equal(testList.head().element, "test #1");
  assert.equal(testList.head().next.element, "test #2");
});

QUnit.test("Test 13: attempting to remove a non-existent item does not change the length of a linked list", assert => {
  console.log("test 13");
  const testList = new LinkedList();

  testList.add("test #1");
  testList.add("test #2");
  assert.equal(testList.size(), 2);
  testList.remove("test #3");

  assert.equal(testList.size(), 2);
});

QUnit.test("Test 14: removing the only item in an linked list results in the head being null", assert => {
  console.log("test 14");
  const testList = new LinkedList();

  testList.add("test #1");
  testList.remove("test #1");

  assert.equal(testList.head(), null);
});


QUnit.test("Test 15: removing the only item in an linked list reduces the length to zero", assert => {
  console.log("test 15");
  const testList = new LinkedList();

  testList.add("test #1");
  assert.equal(testList.size(), 1);

  testList.remove("test #1");
  assert.equal(testList.size(), 0);
});

QUnit.test("Test 16: removing the head of the list should result in the 2nd item becoming the new head", assert => {
  console.log("test 16");
  const testList = new LinkedList();

  testList.add("test #1");
  testList.add("test #2");
  testList.remove("test #1");

  assert.equal(testList.head().element, "test #2");
  assert.equal(testList.head().next, null);
})

QUnit.test("Test 17: removing the second item of a two-item list should result in the list only containing the head item", assert => {
  console.log("test 17");
  const testList = new LinkedList();

  testList.add("test #1");
  testList.add("test #2");
  testList.remove("test #2");

  assert.equal(testList.head().element, "test #1");
  assert.equal(testList.head().next, null);
})

QUnit.test("Test 18: removing the second item of a two-item list should reduce the list's length to one", assert => {
  console.log("test 17");
  const testList = new LinkedList();

  testList.add("test #1");
  testList.add("test #2");
  assert.equal(testList.size(), 2);
  testList.remove("test #2");

  assert.equal(testList.size(), 1);
})

QUnit.test("Test 19: removing the middle item of a three-item list should result in the previous third item becoming the second", assert => {
  console.log("test 19");
  const testList = new LinkedList();

  testList.add("test #1");
  testList.add("test #2");
  testList.add("test #3");
  testList.remove("test #2");

  assert.equal(testList.head().element, "test #1");
  assert.equal(testList.head().next.element, "test #3");
})

QUnit.test("Test 20: removing an item from a three-item list should result in the length decreasing from three to two", assert => {
  console.log("test 20");
  const testList = new LinkedList();

  testList.add("test #1");
  testList.add("test #2");
  testList.add("test #3");
  assert.equal(testList.size(), 3);
  testList.remove("test #2");

  assert.equal(testList.size(), 2);
})
