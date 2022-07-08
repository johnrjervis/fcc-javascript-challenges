QUnit.test("Test 1: the Queue class should initialise with no contents", assert => {
  // need to add a getQueue method for testing purposes
  // this is similar to the print method provided at the start of the challenge
  // the difference is that it returns collection (instead of printing it with console log)
  const testQueue = new Queue();
  assert.deepEqual(testQueue.getQueue(), []);
});

QUnit.test("Test 2: the enqueue method can add an item to a Queue", assert => {
  const testQueue = new Queue();
  testQueue.enqueue("something");
  assert.deepEqual(testQueue.getQueue(), ["something"]);
});

QUnit.test("Test 3: the enqueue method adds items to the end of a Queue", assert => {
  const testQueue = new Queue();
  testQueue.enqueue("something");
  testQueue.enqueue("something else");
  assert.deepEqual(testQueue.getQueue(), ["something", "something else"]);
});

QUnit.test("Test 4: the dequeue method returns the item at the front of a Queue", assert => {
  const testQueue = new Queue();
  testQueue.enqueue("something");
  testQueue.enqueue("something else");
  assert.equal(testQueue.dequeue(), "something");
});

QUnit.test("Test 5: the dequeue method removes the front item from a Queue", assert => {
  const testQueue = new Queue();
  testQueue.enqueue("something");
  testQueue.enqueue("something else");
  testQueue.dequeue();
  assert.deepEqual(testQueue.getQueue(), ["something else"]);
});

QUnit.test("Test 6: the front method returns the item at the front of a Queue", assert => {
  const testQueue = new Queue();
  testQueue.enqueue("something");
  testQueue.enqueue("something else");
  assert.equal(testQueue.front(), "something");
});

QUnit.test("Test 7: the size method returns the length of a Queue", assert => {
  const testQueue = new Queue();
  testQueue.enqueue("something");
  assert.equal(testQueue.size(), 1);
  testQueue.enqueue("something else");
  assert.equal(testQueue.size(), 2);
});

QUnit.test("Test 8: the isEmpty method returns true if a Queue is empty", assert => {
  const testQueue = new Queue();
  assert.true(testQueue.isEmpty());
});

QUnit.test("Test 9: the isEmpty method returns false if a Queue is not empty", assert => {
  const testQueue = new Queue();
  testQueue.enqueue("something");
  assert.false(testQueue.isEmpty());
});
