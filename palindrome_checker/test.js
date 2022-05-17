QUnit.test("remove punctuation should leave only numbers and lower case letters", (assert) => {
  // Check that remove punctuation removes non-numeric characters
  assert.equal(remove_punctuation("It'll cost you £500! "), 'itllcostyou500');
});

QUnit.test("check mirror char returns true for first and last chars of 'eye", (assert) => {
  // Check that check mirror char correcty returns 'e' === 'e' (else clause of function)
  assert.equal(check_mirror_char("eye", 1), true);
});

QUnit.test("check mirror char returns true for second and penultimate chars of 'epype", (assert) => {
  // Check that check mirror char correcty returns 'p' === 'p' (if clause of function)
  assert.equal(check_mirror_char("epype", 2), true);
});

QUnit.test("check mirror char returns false for second and penultimate chars of 'Cheese", (assert) => {
  // Check that check mirror char correcty returns 'h' !== 's' (if clause of function)
  assert.equal(check_mirror_char("cheese", 1), false);
});

QUnit.test("check palindrome returns true for 'eye", (assert) => {
  // Check that palindrome can correctly identify a short palindrome with an odd number of letters
  assert.equal(palindrome("eye"), true);
});

QUnit.test("check palindrome returns false for 'pie", (assert) => {
  // Check that palindrome can correctly reject a short non-palindrome with an odd number of letters
  assert.equal(palindrome("pie"), false);
});

QUnit.test("check palindrome returns true for 'A man, a plan, a canal : panama!", (assert) => {
  // Check that palindrome can correctly identify a long palindrome with an odd number of letters and some punctuation
  assert.equal(palindrome("A man, a plan, a canal: panama!"), true);
});

QUnit.test("check palindrome returns true for 'Never odd or even", (assert) => {
  // Check that palindrome can correctly identify a palindrome with an even number of letters
  assert.equal(palindrome("Never odd or even"), true);
});

QUnit.test("check palindrome returns false for 'A man, a plan, a canal: pandemonium!", (assert) => {
  // Check that palindrome can correctly reject a long (semi-)near-palindrome
  assert.equal(palindrome("A man a plan: pandemonium!"), false);
});

QUnit.test("check palindrome returns false for 'almostomla", (assert) => {
  // Check that palindrome can correctly reject a near-palindrome
  assert.equal(palindrome("almostomla"), false);
});

