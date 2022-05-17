function telephoneCheck(str) {
  return matchTenDigits(str) || matchDashedNumber(str) || matchSpacedNumber(str);
}

const matchTenDigits = (str) => {
  return /^\d{10}$/.test(str);
}

const matchDashedNumber = (str) => {
  return /^(1\s?)?(\d{3}-|\(\d{3}\)\s?)\d{3}-\d{4}$/.test(str);
}

const matchSpacedNumber = (str) => {
  return /^((1\s)?\d{3}\s\d{3}\s\d{4})$/.test(str);
}