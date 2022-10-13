QUnit.test("Test 1: A trie should have a root property that is an instance of node", assert => {
  const testTree = new Trie();

  assert.true(testTree.root instanceof Node);
});

QUnit.test("Test 2: A single letter can be added to a trie: it will be stored as a key in the root's keys object", assert => {
  const testTree = new Trie();

  testTree.add('a');

  assert.true(testTree.root.keys.has('a'));
});

QUnit.test("Test 3: Only the first letter of a word is added to the root's keys object", assert => {
  const testTree = new Trie();

  testTree.add('at');

  assert.true(testTree.root.keys.has('a'));
});

QUnit.test("Test 4: Each letter in a trie's root's keys object is the key to another node", assert => {
  const testTree = new Trie();
  testTree.add('a');

  assert.true(testTree.root.keys.get('a') instanceof Node);
});

QUnit.test("Test 5: The second letter in a word is added to the keys object for the first letter's child node", assert => {
  const testTree = new Trie();
  testTree.add('at');
  
  const letter1 = testTree.root.keys.get('a');

  assert.true(letter1.keys.has('t'));
});

QUnit.test("Test 6: Adding new words should not overwrite existing words", assert => {
  const testTree = new Trie();
  testTree.add('at');

  testTree.add('as');
  const letter1 = testTree.root.keys.get('a');

  assert.true(letter1.keys.has('t'));
  assert.true(letter1.keys.has('s'));
});

QUnit.test("Test 7: A node for a letter that does not represent the end of any word in the dictionary will have a falsey end property", assert => {
  const testTree = new Trie();
  testTree.add('at');

  const letter1 = testTree.root.keys.get('a');

  assert.false(letter1.isEnd());
});

QUnit.test("Test 8: A node for a letter that represents the end of any word in the dictionary will have a truthy end property", assert => {
  const testTree = new Trie();
  testTree.add('at');
  const letter1 = testTree.root.keys.get('a');

  const letter2 = letter1.keys.get('t');

  assert.true(letter2.isEnd());
});

QUnit.test("Test 9: isWord returns false for a word that has not been added to the trie", assert => {
  const testTree = new Trie();

  assert.false(testTree.isWord("notInTheTrie"));
});

QUnit.test("Test 10: isWord returns true for a word that has been added to the trie", assert => {
  const testTree = new Trie();
  testTree.add('yes');

  assert.true(testTree.isWord("yes"));
});

QUnit.test("Test 11: isWord returns false even if there is a similar word in the trie", assert => {
  const testTree = new Trie();
  testTree.add('at');

  assert.false(testTree.isWord("as"));
});

QUnit.test("Test 12: isWord returns false if the sought word has no similarity to those that are in the tree", assert => {
  const testTree = new Trie();
  testTree.add('cat');

  assert.false(testTree.isWord("dog"));
});

QUnit.test("Test 13: isWord returns false even if the sought word is the first part of a word that is already in the tree", assert => {
  const testTree = new Trie();
  testTree.add('cart');

  assert.false(testTree.isWord("car"));
});

QUnit.test("Test 14: isWord returns true when the sought word is one of several in the tree", assert => {
  const testTree = new Trie();
  testTree.add('cat');
  testTree.add('dog');
  testTree.add('monkey');
  testTree.add('badger');
  testTree.add('hamster');
  testTree.add('giraffe');

  assert.true(testTree.isWord("monkey"));
});

QUnit.test("Test 15: print can return a list of one letter words from a tree", assert => {
  const testTree = new Trie();
  testTree.add('a');
  testTree.add('i');

  assert.deepEqual(testTree.print(), ['a', 'i']);
});

QUnit.test("Test 16: print can retrieve a word from a tree", assert => {
  const testTree = new Trie();
  testTree.add('test');

  assert.equal(testTree.print(), 'test');
});

QUnit.test("Test 17: print returns a list of all the words in a tree", assert => {
  const testTree = new Trie();
  testTree.add('cat');
  testTree.add('dog');
  testTree.add('monkey');

  assert.deepEqual(testTree.print(), ['cat', 'dog', 'monkey']);
});

QUnit.test("Test 18: print can handle words that start with the same letter or combination of letters", assert => {
  const testTree = new Trie();
  testTree.add('cat');
  testTree.add('card');
  testTree.add('cart');

  assert.deepEqual(testTree.print(), ['cat', 'card', 'cart']);
});

QUnit.test("Test 19: print can handle a word that is part of another word", assert => {
  const testTree = new Trie();
  testTree.add('car');
  testTree.add('carnation');

  assert.deepEqual(testTree.print(), ['car', 'carnation']);
});

QUnit.test("Test 20: print returns all words from a tree, including words that start with the same letter combinations and words that contain other complete words", assert => {
  const testTree = new Trie();
  testTree.add('car');
  testTree.add('card')
  testTree.add('cart');
  testTree.add('carnation');
  testTree.add('cat');
  testTree.add('dog')
  testTree.add('monkey');
  testTree.add('ten');
  testTree.add('test');

  assert.deepEqual(testTree.print(), ['car', 'card', 'cart', 'carnation', 'cat', 'dog', 'monkey', 'ten', 'test']);
});
