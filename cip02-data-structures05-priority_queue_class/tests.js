QUnit.test("Test 1: the PriorityQueue class should initialise with no contents", assert => {
  const testQueue = new PriorityQueue();
  assert.deepEqual(testQueue.getQueue(), []);
});

QUnit.test("Test 2: the enqueue method can add an item to a Priority Queue", assert => {
  // priority queue items are two-element arrays in the format [item name, priority level]
  const testQueue = new PriorityQueue();
  testQueue.enqueue(["something", 2]);
  assert.deepEqual(testQueue.getQueue(), [["something", 2]]);
});

QUnit.test("Test 3: the enqueue method adds items to the end of a Priority Queue if the items' priority levels are equal", assert => {
  const testQueue = new PriorityQueue();
  testQueue.enqueue(["something", 2]);
  testQueue.enqueue(["something else", 2]);
  assert.deepEqual(testQueue.getQueue(), [["something", 2], ["something else", 2]]);
});

QUnit.test("Test 4: the enqueue method adds priority items to the front of a Priority Queue", assert => {
  const testQueue = new PriorityQueue();
  testQueue.enqueue(["something", 2]);
  testQueue.enqueue(["something important", 1]);
  assert.deepEqual(testQueue.getQueue(), [["something important", 1], ["something", 2]]);
});

QUnit.test("Test 5: items in a Priority Queue will be sorted by priority and then by order added", assert => {
  const testQueue = new PriorityQueue();
  testQueue.enqueue(["something", 2]);
  testQueue.enqueue(["something minor", 3])
  testQueue.enqueue(["something else", 2]);
  testQueue.enqueue(["something important", 1]);
  assert.deepEqual(testQueue.getQueue(), [["something important", 1], ["something", 2], ["something else", 2], ["something minor", 3]]);
});

QUnit.test("Test 6: the dequeue method returns the name of the item at the front of a Priority Queue", assert => {
  const testQueue = new PriorityQueue();
  testQueue.enqueue(["something", 2]);
  testQueue.enqueue(["something else", 2]);
  assert.equal(testQueue.dequeue(), "something");
});

QUnit.test("Test 7: the dequeue method should return items in order of priority and then by order in which they were added to the queue", assert => {
  const testQueue = new PriorityQueue();
  testQueue.enqueue(["something", 2]);
  testQueue.enqueue(["something minor", 3])
  testQueue.enqueue(["something else", 2]);
  testQueue.enqueue(["something important", 1]);
  assert.equal(testQueue.dequeue(), "something important");
  assert.equal(testQueue.dequeue(), "something");
  assert.equal(testQueue.dequeue(), "something else");
  assert.equal(testQueue.dequeue(), "something minor");
});

QUnit.test("Test 8: the dequeue method removes the front item from a Priority Queue", assert => {
  const testQueue = new PriorityQueue();
  testQueue.enqueue(["something", 2]);
  testQueue.enqueue(["something else", 2]);
  testQueue.dequeue();
  assert.deepEqual(testQueue.getQueue(), [["something else", 2]]);
});

QUnit.test("Test 9: the front method returns the name of the item at the front of a Priority Queue", assert => {
  const testQueue = new PriorityQueue();
  testQueue.enqueue(["something", 2]);
  testQueue.enqueue(["something else", 2]);
  assert.equal(testQueue.front(), "something");
});

QUnit.test("Test 10: the size method returns the length of a Priority Queue", assert => {
  const testQueue = new PriorityQueue();
  testQueue.enqueue(["something", 2]);
  assert.equal(testQueue.size(), 1);
  testQueue.enqueue(["something else", 2]);
  assert.equal(testQueue.size(), 2);
});

QUnit.test("Test 11: the size method should correctly track the size of a Priority Queue after repeated enqueue and dequeue calls", assert => {
  const testQueue = new PriorityQueue();
  assert.equal(testQueue.size(), 0);
  testQueue.enqueue(["something", 2]);
  assert.equal(testQueue.size(), 1);
  testQueue.enqueue(["something minor", 3])
  assert.equal(testQueue.size(), 2);
  testQueue.enqueue(["something else", 2]);
  assert.equal(testQueue.size(), 3);
  testQueue.enqueue(["something important", 1]);
  assert.equal(testQueue.size(), 4);
  testQueue.dequeue();
  assert.equal(testQueue.size(), 3);
  testQueue.dequeue();
  assert.equal(testQueue.size(), 2);
  testQueue.dequeue();
  assert.equal(testQueue.size(), 1);
  testQueue.dequeue();
  assert.equal(testQueue.size(), 0);
});

QUnit.test("Test 12: the isEmpty method returns true if a Proprity Queue is empty", assert => {
  const testQueue = new PriorityQueue();
  assert.true(testQueue.isEmpty());
});

QUnit.test("Test 13: the isEmpty method returns false if a Priority Queue is not empty", assert => {
  const testQueue = new PriorityQueue();
  testQueue.enqueue(["something", 2]);
  assert.false(testQueue.isEmpty());
});