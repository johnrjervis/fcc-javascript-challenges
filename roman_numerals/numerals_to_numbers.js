const NUMERALS = {
  'i': 1,
  'v': 5,
  'x': 10,
  'l': 50,
  'c': 100,
  'd': 500,
  'm': 1000,
}

const numeral_converter = (numeral_str) => {
  const arr = [...numeral_str]
  let result = 0;
  let last_val = 0;

  while (arr.length > 0) {
    const current_numeral = arr.pop();
    const current_val = NUMERALS[current_numeral]

    if (current_val < last_val) {
      result -= current_val;
    } else {
      result += current_val;
      last_val = current_val;
    }
  };

  return result;
};


QUnit.test("single numeral test", (assert) => {
  assert.equal(numeral_converter('x'), 10, "single numeral test")
});

QUnit.test("multiple numeral test", (assert) => {
  assert.equal(numeral_converter('mcclxii'), 1262, "multiple test")
});

QUnit.test("multiple reducing numeral test", (assert) => {
  assert.equal(numeral_converter('cxiv'), 114, "multiple test")
});
