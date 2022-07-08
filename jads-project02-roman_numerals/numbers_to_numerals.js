const convertToRoman = (num) => {
  const CONVERSIONS = [
      {value: 1000, numeral: 'M'},
      {value: 500, numeral: 'D'},
      {value: 100, numeral: 'C'},
      {value: 50, numeral: 'L'},
      {value: 10, numeral: 'X'},
      {value: 5, numeral: 'V'},
      {value: 1, numeral: 'I'},
  ];

  const raw_result = convert_numbers_recursively(num, '', CONVERSIONS);
  return update_numerals(raw_result);
};

const convert_numbers_recursively = (number, string, conversions) => {
  // Uses recursion to build a string of numerals
  // The loop adds the biggest numeral that is lower in value than *number* to the *string*
  //console.log(`function called with args: ${number} and ${string}`);

  for (const conversion of conversions) {
    if (number > conversion.value) {
      return convert_numbers_recursively(number - conversion.value, string + conversion.numeral, conversions);
    } else if (number === conversion.value) {
      return string + conversion.numeral;
    }
  }

};

const update_numerals = (string) => {
  // Replaces IIII with IV, then VIV with IX, with similar for XXXX and CCCC;
  const updated_string = string.replace('IIII', 'IV').replace('XXXX', 'XL').replace('CCCC', 'CD');
  return updated_string.replace('VIV', 'IX').replace('LXL', 'XC').replace('DCD', 'CM');
};
