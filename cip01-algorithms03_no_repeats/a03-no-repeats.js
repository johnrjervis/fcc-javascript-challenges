const permAlone = (str) => {
  const permutations = generatePermutationsRecursively(str, [[]]);

  const result = countPairs(permutations, str)

  return result;
}

const hasPairs = (str) => {
  let result = false;

  for (let i = 0; i <= str.length - 2; i++) {
    if (str[i] === str[i + 1]) {
      result = true
    }
  }

  return result;
}

const countPairs = (arr, str) => {
  let result = 0;

  for (const subArr of arr)  {
    let testStr = ""
    for (const index of subArr) {
      testStr += str[index];
    }
    if (!hasPairs(testStr)) {
      result++;
    }
  }

  return result;
}

const generatePermutationsRecursively = (str, arr) => {

  const result = []

  for (const subArr of arr) {
    for (let i = 0; i <= str.length - 1; i++) {
      if (subArr.indexOf(i) === -1) {
        const newSub = [...subArr];
        newSub.push(i);
        result.push(newSub)
      }
    }
  }

  if (result[0].length === str.length) {
    return result;
  } else {
    return generatePermutationsRecursively(str, result);
  }
}