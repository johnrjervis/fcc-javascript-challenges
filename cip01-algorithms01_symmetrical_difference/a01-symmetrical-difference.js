function sym() {
  return [...arguments].reduce((arg1, arg2) => diffTwoArrays(arg1, arg2));
}

const diffTwoArrays = (array1, array2) => {
  const result = [];

  for (const elem1 of array1) {
    if (elemNotInArray(elem1, array2) && elemNotInArray(elem1, result)) {
      result.push(elem1);
    }
  }

  for (const elem2 of array2) {
    if (elemNotInArray(elem2, array1) && elemNotInArray(elem2, result)) {
      result.push(elem2);
    }
  }

  return result;
}

const elemNotInArray = (elem, array) => {
  return (array.indexOf(elem) === -1);
}

