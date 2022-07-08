QUnit.test("hasPairs should return false if the supplied string does not contain any identical characters that are adjacent to each other", assert => {
  assert.false(hasPairs('abab'));
});

QUnit.test("hasPairs should return true if the supplied string does contain identical characters that are adjacent to each other", assert => {
  assert.true(hasPairs('abba'));
});

QUnit.test("when supplied with a string of two identical characters, countPairs should return 0", assert => {
  assert.equal(
    countPairs([[0, 1], [1, 0]], 'aa'),
    0
  )
});

QUnit.test("When supplied with a string of characters and an array of permutations, countPairs should count the number of letter combinations for which hasPairs returns false", assert => {
  assert.equal(
    countPairs([[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]], 'aba'),
    2
  )
});

QUnit.test("generatePermutationsRecursively should return an array containing [0] when passed a single-character string and an array containing an empty array as arguments", assert => {
  assert.deepEqual(generatePermutationsRecursively('a', [[]]), [[0]]);
});

QUnit.test("generatePermutationsRecursively should return an array containing all possible index permutations when passed a multi-character string and an array containing an empty array as arguments", assert => {
  assert.deepEqual(generatePermutationsRecursively('aa', [[]]), [[0, 1], [1, 0]]);
});

QUnit.test("permAlone should return 0 for the argument aa", assert => {
  assert.equal(permAlone('aa'), 0);
});

QUnit.test("permAlone should return 2 for the argument aba", assert => {
  assert.equal(permAlone('aba'), 2);
});

QUnit.test("permAlone return 8 for the argument abba", assert => {
  assert.equal(permAlone('abba'), 8);
});