QUnit.test("Test 1: the Stack class should initialise with no contents", assert => {
  // need to add a getStack method for testing purposes
  // at this stage, it can just return []
  const testStack = new Stack();
  assert.deepEqual(testStack.getStack(), []);
});

QUnit.test("Test 2: the push method can add an item to a Stack", assert => {
  // now have to add a push methods
  const testStack = new Stack();
  testStack.push("something");
  assert.deepEqual(testStack.getStack(), ["something"]);
});

QUnit.test("Test 3: the push method adds items to the top (i.e. end) of a Stack", assert => {
  const testStack = new Stack();
  testStack.push("something");
  testStack.push("something else");
  assert.deepEqual(testStack.getStack(), ["something", "something else"]);
});

QUnit.test("Test 4: the pop method returns the last item added to a Stack", assert => {
  const testStack = new Stack();
  testStack.push("something");
  testStack.push("something else");
  assert.equal(testStack.pop(), "something else");
});

QUnit.test("Test 5: the pop method removes the topmost item from a Stack", assert => {
  const testStack = new Stack();
  testStack.push("something");
  testStack.push("something else");
  testStack.pop();
  assert.deepEqual(testStack.getStack(), ["something"]);
});

QUnit.test("Test 6: the peek method returns the last item added to a Stack", assert => {
  const testStack = new Stack();
  testStack.push("something");
  testStack.push("something else");
  assert.equal(testStack.peek(), "something else");
});

QUnit.test("Test 7: the isEmpty method returns true if a Stack is empty", assert => {
  const testStack = new Stack();
  assert.true(testStack.isEmpty());
});

QUnit.test("Test 8: the isEmpty method returns false if a Stack is not empty", assert => {
  const testStack = new Stack();
  testStack.push("something");
  assert.false(testStack.isEmpty());
});

QUnit.test("Test 9: the clear method empties a Stack", assert => {
  const testStack = new Stack();
  testStack.push("something");
  testStack.clear();
  assert.true(testStack.isEmpty());
});
