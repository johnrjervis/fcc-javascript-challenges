QUnit.test("translate letter should return N for A", (assert) => {
  // Basic test for a single letter
  assert.equal(translate_letter('A'), 'N');
});

QUnit.test("translate letter should return M for Z", (assert) => {
  // Test alphabet wrap-around for a single letter with index > 13
  assert.equal(translate_letter('Z'), 'M');
});

QUnit.test("translate letter should return ! for !", (assert) => {
  // Test punctuation characters are not translated
  assert.equal(translate_letter('!'), '!');
});

QUnit.test("rot13 should return FREE CODE CAMP for SERR PBQR PNZC", (assert) => {
  // Conversion of an entire string
  assert.equal(rot13('SERR PBQR PNZC'), 'FREE CODE CAMP');
});

const test_string = "FBBA GURL'YY OR OERRQVAT HF YVXR PNGGYR! LBH'IR TBG GB JNEA RIRELBAR NAQ GRYY GURZ! FBLYRAG TERRA VF ZNQR BS CRBCYR! LBH'IR TBG GB GRYY GURZ! FBLYRAG TERRA VF CRBYR!";

