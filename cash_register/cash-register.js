const VALUES = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.1,
  "QUARTER": 0.25,
  "ONE": 1,
  "FIVE": 5,
  "TEN": 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100,
};

function checkCashRegister(price, cash, cid) {

  const change = [];
  const changeDue = cash - price;

  for (let i = cid.length - 1; i >= 0; i--) {
    const changeRequired = calcAdjustedDifference(changeDue, addChange(change));
    //console.log(`Calculated difference for ${changeDue} and ${addChange(change)} is ${changeRequired}`)
    const unitChange = calcChangeAmount(changeRequired, cid[i]);
    if(unitChange[1]) {
      change.push(unitChange)
    }
  }

  const correctChange = changeDue === addChange(change);
  //console.log(`Comparing change required (${changeDue}) with change to be given (${addChange(change)}) -- Result: ${changeDue === addChange(change)}`);
  const cashRemainingInDraw = addChange(cid) - addChange(change);
  let resultStatus, resultChange;

  if (!correctChange) {
    resultStatus = "INSUFFICIENT_FUNDS";
    resultChange = [];
  } else if (!cashRemainingInDraw) {
    resultStatus = "CLOSED";
    resultChange = cid;
  } else {
    resultStatus = "OPEN";
    resultChange = change;
  }

  return {status: resultStatus, change: resultChange};
}

const addChange = (arr) => {
  //console.log(`Args: ${arr}`);
  // adds the total cash value of a change array
  let result = 0;
  for (const elem of arr) {
    result += elem[1];
  }
  // Adjustment for imprecise addition
  //result = Number(result.toFixed(2));
  //console.log(`Raw result: ${result}`);
  result = Math.round(result * 100) / 100;
  //console.log(`Returning adjusted change: ${result}`);
  return result;
}

const calcChangeAmount = (changeAmount, changeAvailable) => {
  // Returns the amount of change for a given coin or note based:
  // 1) The amount of change required, and 
  // 2) The amount of the coin or note available
  //console.log(`Calculating change for change required: ${changeAmount} with available change: ${changeAvailable}`);
  let result = 0;
  const noteValue = VALUES[changeAvailable[0]]

  if (noteValue <= changeAmount) {
    if (changeAvailable[1] <= changeAmount ) {
      return changeAvailable;
    } else {
      result = Math.floor(changeAmount / noteValue) * noteValue;
    }
  }
 
  //console.log(`returning change: ${result}`)
  return [changeAvailable[0], result];
};

const calcAdjustedDifference = (num1, num2) => {
  // Can sanitise out unexpected results, such as 96.74 - 96.7 = 0.03999999999999204
  return Math.round((num1 - num2) * 100) / 100;
}