QUnit.test("addChange calculates the correct amount", assert => {
  assert.equal(addChange([["PENNY", 0], ["NICKEL", 0], ["DIME", 0.05], ["QUARTER", 0.75], ["ONE", 0], ["FIVE", 5], ["TEN", 0], ["TWENTY", 20], ["ONE HUNDRED", 100],]), 125.8);
});

QUnit.test("addChange works for any length of array", assert => {
  assert.equal(addChange([["ONE HUNDRED", 100],]), 100);
});

QUnit.test("calcChangeAmount returns 0 if value > change amount", assert => {
  assert.deepEqual(calcChangeAmount(25, ["ONE HUNDRED", 100]), ["ONE HUNDRED", 0]);
});

QUnit.test("calcChangeAmount returns available change if < change amount", assert => {
  assert.deepEqual(calcChangeAmount(200, ["ONE HUNDRED", 100]), ["ONE HUNDRED", 100]);
});

QUnit.test("calcChangeAmount returns available change if = change amount", assert => {
  assert.deepEqual(calcChangeAmount(200, ["ONE HUNDRED", 100]), ["ONE HUNDRED", 100]);
});

QUnit.test("calcChangeAmount returns partial change if change available > change amount", assert => {
  assert.deepEqual(calcChangeAmount(250, ["ONE HUNDRED", 400]), ["ONE HUNDRED", 200]);
});

QUnit.test("calcChangeAmount returns partial change if change available > change amount II", assert => {
  assert.deepEqual(calcChangeAmount(0.5, ["QUARTER", 4.25]), ["QUARTER", 0.5]);
});

QUnit.test("checkCashRegister should return an Object", assert => {
  assert.equal(typeof checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]), 'object');
});

QUnit.test("checkCashRegister change should only contain notes and coins with value > 0", assert => {
  assert.deepEqual(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]), {status: "OPEN", change: [["QUARTER", 0.5]]});
});

// Produced an unexpected failure until sums were adjusted for precision errors
QUnit.test("checkCashRegister change can contain multiple notes and coins", assert => {
  assert.deepEqual(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]), {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]});
});

QUnit.test("checkCashRegister returns object with INSUFFICIENT FUNDS status if not enough cid", assert => {
  assert.deepEqual(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), {status: "INSUFFICIENT_FUNDS", change: []});
})

QUnit.test("checkCashRegister returns object with INSUFFICIENT_FUNDS status if correct change cannot be provided (even if cid > change amount)", assert => {
  assert.deepEqual(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), {status: "INSUFFICIENT_FUNDS", change: []});
});

QUnit.test("checkCashRegister returns object with CLOSED status if change required = cid", assert => {
  assert.deepEqual(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]});
});

QUnit.test("calcChangeAmount should calculate correct number of tens required", assert => {
  assert.deepEqual(calcChangeAmount(40, ["TEN", 50]), ["TEN", 40]);
});

QUnit.test("calcChangeAmount should calculate correct number of pennies required", assert => {
  assert.deepEqual(calcChangeAmount(0.04, ["PENNY", 0.15]), ["PENNY", 0.04]);
});

QUnit.test("calcAdjustedDifference returns expected value for regular sum", assert => {
  assert.equal(calcAdjustedDifference(5, 1), 4);
});

QUnit.test("JavaScript maths produces some unexpected results", assert => {
  assert.notEqual(96.74 - 96.7, 0.4);
});

QUnit.test("calcAdjustedDifference irons out precision errors in JavaScript maths", assert => {
  assert.equal(calcAdjustedDifference(96.74, 96.7), 0.04);
});