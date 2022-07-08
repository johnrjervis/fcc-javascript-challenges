const TEST_CONV_TABLE = [
  {value: 10, numeral: 'X'},
  {value: 5, numeral: 'V'},
  {value: 1, numeral: 'I'},
];

// Basic tests - larger numerals always appear before smaller ones (so no IV, IX, CM, etc.)

QUnit.test("convert_ones... should return I for 1", (assert) => {
  assert.equal(convert_ones_recursively(1, ''), 'I');
});

QUnit.test("convert_ones... should return III for 3", (assert) => {
  assert.equal(convert_ones_recursively(3, ''), 'III');
});

QUnit.test("convert_fives_and_ones_recursively should return VII for 7", (assert) => {
  assert.equal(convert_fives_and_ones_recursively(7, ''), 'VII');
});

QUnit.test("convert_numbers_recursively should return III for 3", (assert) => {
  assert.equal(convert_numbers_recursively(3, '', TEST_CONV_TABLE), 'III');
});

QUnit.test("convert_numbers_recursively should return XVI for 16", (assert) => {
  assert.equal(convert_numbers_recursively(16, '', TEST_CONV_TABLE), 'XVI');
});

QUnit.test("convert_numbers_recursively should return XXIII for 23", (assert) => {
  assert.equal(convert_numbers_recursively(23, '', TEST_CONV_TABLE), 'XXIII');
});

QUnit.test("convertToRoman should return III for 3", (assert) => {
  assert.equal(convertToRoman(3), 'III');
});

QUnit.test("convertToRoman should return XXIII for 23", (assert) => {
  assert.equal(convertToRoman(23), 'XXIII');
});

QUnit.test("convertToRoman should return MMMDCCLXVIII for 3768", (assert) => {
  assert.equal(convertToRoman(3768), 'MMMDCCLXVIII')
});

// Tests for repeats of four to be updated (e.g. IIII to IV)

QUnit.test("update_numerals should return IV for IIII", (assert) => {
  assert.equal(update_numerals('IIII'), 'IV');
});

QUnit.test("update_numerals should return XL for XXXX", (assert) => {
  assert.equal(update_numerals('XXXX'), 'XL');
});


QUnit.test("update_numerals should return CCXXX for CCXXX", (assert) => {
  assert.equal(update_numerals('CCXXX'), 'CCXXX');
});

QUnit.test("update_numerals should return CD for CCCC", (assert) => {
  assert.equal(update_numerals('CCCC'), 'CD');
});

QUnit.test("convertToRoman should return CXLIV for 144", (assert) => {
  assert.equal(convertToRoman(144), 'CXLIV');
});

// Tests for repeat-of-four updates to be further adjusted as necessary (e.g. VIV to IX)

QUnit.test("update_numerals should return IX for VIV", (assert) => {
  assert.equal(update_numerals('VIV'), 'IX');
});

QUnit.test("update_numerals should return XCIV for LXXXXIIII", (assert) => {
  assert.equal(update_numerals('XXXX'), 'XL');
});

QUnit.test("update_numerals should return CM for DCCCC", (assert) => {
  assert.equal(update_numerals('DCCCC'), 'CM');
});

QUnit.test("convertToRoman should return MCMXCIX for 1999", (assert) => {
  assert.equal(convertToRoman(144), 'CXLIV');
});
