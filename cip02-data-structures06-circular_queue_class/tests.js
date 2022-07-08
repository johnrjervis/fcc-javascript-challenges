QUnit.test("Test 1: the CircularQueue class initialises with an array that has a fixed number of null elements as specified by the argument passed to the constructor", assert => {
  const testQueue = new CircularQueue(3);
  assert.deepEqual(testQueue.queue, [null, null, null]);
});

QUnit.test("Test 2: the print method of the CircularQueue class returns the queue's collection", assert => {
  const testQueue = new CircularQueue(3);
  assert.deepEqual(testQueue.print(), [null, null, null]);
});

QUnit.test("Test 3: the enqueue method adds an item to the front of a Circular Queue", assert => {
  const testQueue = new CircularQueue(3);
  testQueue.enqueue("something");
  assert.deepEqual(testQueue.print(), ["something", null, null]);
});

QUnit.test("Test 4: the enqueue method adds new items after existing ones in the queue", assert => {
  const testQueue = new CircularQueue(3);
  testQueue.enqueue("something");
  testQueue.enqueue("something else");
  assert.deepEqual(testQueue.print(), ["something", "something else", null]);
});

QUnit.test("Test 5: the enqueue method returns items that are added to the queue", assert => {
  const testQueue = new CircularQueue(3);
  assert.equal(testQueue.enqueue("something"), "something");
  assert.equal(testQueue.enqueue("something else"), "something else");
});

QUnit.test("Test 6: the enqueue method returns null if no item is added to the queue", assert => {
  const testQueue = new CircularQueue(3);
  testQueue.enqueue("something");
  testQueue.enqueue("something else");
  testQueue.enqueue("something more");
  assert.equal(testQueue.enqueue("and now for something completely different"), null);
});

QUnit.test("Test 7: the first call to the dequeue method returns the first item in the queue", assert => {
  const testQueue = new CircularQueue(3);
  testQueue.enqueue("something");
  testQueue.enqueue("something else");
  assert.equal(testQueue.dequeue(), "something");
});

QUnit.test("Test 8: items are dequeued in the order that they were added to the queue", assert => {
  const testQueue = new CircularQueue(3);
  testQueue.enqueue("something");
  testQueue.enqueue("something else");
  assert.equal(testQueue.dequeue(), "something");
  assert.equal(testQueue.dequeue(), "something else");
});

QUnit.test("Test 9: after an item is dequeued, it is removed from an array", assert => {
  const testQueue = new CircularQueue(3);
  testQueue.enqueue("something");
  testQueue.enqueue("something else");
  testQueue.dequeue();
  assert.deepEqual(testQueue.print(), [null, "something else", null]);
});

QUnit.test("Test 10: after enqueue reaches the end of a queue, the method goes back to the start of the queue", assert => {
  const testQueue = new CircularQueue(3);
  testQueue.enqueue("something");
  testQueue.enqueue("something else");
  assert.equal(testQueue.write, 2);
  testQueue.enqueue("just another something");
  assert.equal(testQueue.write, 0);
  testQueue.dequeue(); // stops future constraints breaking the test
  testQueue.enqueue("and now for something completely different");
  assert.deepEqual(
    testQueue.print(),
    [
      "and now for something completely different",
      "something else",
      "just another something"
    ]
  );
});

QUnit.test("Test 11: when dequeue reaches the end of a queue, the method goes back to the start of the queue", assert => {
  const testQueue = new CircularQueue(3);
  testQueue.enqueue("something");
  testQueue.enqueue("something else");
  testQueue.enqueue("just another something");
  testQueue.dequeue(); // stops future constraints breaking the test
  testQueue.enqueue("and now for something completely different");
  testQueue.dequeue();
  assert.equal(testQueue.read, 2)
  testQueue.dequeue();
  assert.equal(testQueue.read, 0)
  assert.equal(testQueue.dequeue(), "and now for something completely different");
});

QUnit.test("Test 12: the read pointer does not advance when trying to dequeue before data has been added to the queue", assert => {
  /* cannot just rely on read === write in the code
  this is because the write pointer can circle round to the read pointer's position
  after filling the array */
  const testQueue = new CircularQueue(3);
  assert.equal(testQueue.read, 0);
  assert.equal(testQueue.dequeue(), null);
  assert.equal(testQueue.read, 0);
});

QUnit.test("Test 13: dequeue returns null when an attempt is made to read from a position in the queue that does not contain data", assert => {
  const testQueue = new CircularQueue(3);
  testQueue.enqueue("something");
  assert.equal(testQueue.dequeue(), "something");
  assert.equal(testQueue.dequeue(), null);
});

QUnit.test("Test 14: the read pointer advances while data is available to dequeue", assert => {
  const testQueue = new CircularQueue(3);
  testQueue.enqueue("something");
  testQueue.dequeue();
  assert.equal(testQueue.read, 1)
  assert.equal(testQueue.dequeue(), null);
  assert.equal(testQueue.read, 1)
});

QUnit.test("Test 15: the enqueue method returns null when an attempt is made to overwrite data that has not yet been read", assert => {
  const testQueue = new CircularQueue(3);
  testQueue.enqueue("something");
  testQueue.enqueue("something else");
  testQueue.enqueue("something more");
  assert.equal(testQueue.enqueue("and another thing"), null);
});

QUnit.test("Test 16: enqueue does not add anything to the queue when an attempt is made to overwrite data that has not yet been read", assert => {
  const testQueue = new CircularQueue(3);
  testQueue.enqueue("something");
  testQueue.enqueue("something else");
  testQueue.enqueue("something more");
  assert.equal(testQueue.enqueue("and another thing"), null);
  assert.deepEqual(testQueue.print(), ["something", "something else", "something more"]);
});

QUnit.test("Test 17: enqueue does not advance the write pointer when an attempt is made to overwrite data that has not been read", assert => {
  const testQueue = new CircularQueue();
  testQueue.enqueue("something");
  testQueue.enqueue("something else");
  testQueue.enqueue("something more");
  assert.equal(testQueue.write, 0);
  testQueue.enqueue("and another thing")
  assert.equal(testQueue.write, 0);
});

QUnit.test("Test 18: the read and write pointers behave predictably during a cycle of full population and depopulation of the queue", assert => {
  const testQueue = new CircularQueue(3);
  assert.equal(testQueue.read, 0);
  assert.equal(testQueue.write, 0);
  testQueue.enqueue("something");
  assert.equal(testQueue.read, 0);
  assert.equal(testQueue.write, 1);
  testQueue.enqueue("something else");
  assert.equal(testQueue.read, 0);
  assert.equal(testQueue.write, 2);
  testQueue.enqueue("yet something else");
  assert.equal(testQueue.read, 0);
  assert.equal(testQueue.write, 0);
  testQueue.dequeue();
  assert.equal(testQueue.read, 1);
  assert.equal(testQueue.write, 0);
  testQueue.dequeue();
  assert.equal(testQueue.read, 2);
  assert.equal(testQueue.write, 0);
});