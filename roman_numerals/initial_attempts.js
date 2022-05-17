// Initial trial solutions

const convert_ones_recursively = (number, string) => {
  if (number === 1) {
    return string + 'I'
  } else {
    return convert_ones_recursively(number - 1, string + 'I');
  };
};

const convert_fives_and_ones_recursively = (number, string) => {
  //console.log(`function called with args: ${number} and ${string}`);

  const FIVES_AND_ONES = [
    {value: 5, numeral: 'V'},
    {value: 1, numeral: 'I'},
  ]
  for (const NUMBER of FIVES_AND_ONES) {
    if (number > NUMBER.value) {
      return convert_fives_and_ones_recursively(number - NUMBER.value, string + NUMBER.numeral);
    } else if (number === NUMBER.value) {
      return string + NUMBER.numeral;
    }
  }
};
