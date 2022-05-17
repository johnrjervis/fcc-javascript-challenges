QUnit.test("matchTenDigits returns true when passed 10-digit string", function (assert) {
  assert.true(matchTenDigits("1234567890"));
});

QUnit.test("matchTenDigits returns false when input too short", function (assert) {
  assert.false(matchTenDigits("123456789"));
});

QUnit.test("matchTenDigits returns false when input too long", function (assert) {
  assert.false(matchTenDigits("12345678901"));
});

QUnit.test("matchTenDigits returns false when input contains letter", function (assert) {
  assert.false(matchTenDigits("123456789j"));
});

QUnit.test("matchSpacedNumber returns true for valid spaced number", function (assert) {
  assert.true(matchSpacedNumber("123 456 7890"));
});

QUnit.test("matchSpacedNumber returns true for number with US code", function (assert) {
  assert.true(matchSpacedNumber("1 123 456 7890"));
});

QUnit.test("matchSpacedNumber returns false for number without spaces", function (assert) {
  assert.false(matchSpacedNumber("1234567890"));
});

QUnit.test("matchDashedNumber matches number with two dashes", function (assert) {
  assert.true(matchDashedNumber("123-456-7890"));
});

QUnit.test("matchDashedNumber matches number with area code brackets", function (assert) {
  assert.true(matchDashedNumber("(123)456-7890"));
});

QUnit.test("matchDashedNumber matches for area code brackets & space", function (assert) {
  assert.true(matchDashedNumber("(123) 456-7890"));
});

QUnit.test("matchDashedNumber matches with US country code", function (assert) {
  assert.true(matchDashedNumber("1 (123) 456-7890"));
});

QUnit.test("matchDashedNumber matches with no-space US country code", function (assert) {
  assert.true(matchDashedNumber("1(123) 456-7890"));
});

QUnit.test("matchDashedNumber rejects unclosed area code brackets", function (assert) {
  assert.false(matchDashedNumber("(123 456-7890"));
});

QUnit.test("matchDashedNumber rejects incorrectly closed brackets", function (assert) {
  assert.false(matchDashedNumber("(123 456)-7890"));
});

QUnit.test("telephoneCheck should match if helper function matches", function (assert) {
  assert.true(telephoneCheck("(123) 456-7890"));
});

QUnit.test("telephoneCheck should not match for invalid input", function (assert) {
  assert.false(telephoneCheck("bad number"));
});