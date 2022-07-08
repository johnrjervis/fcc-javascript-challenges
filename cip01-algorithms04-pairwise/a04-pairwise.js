function pairwise(arr, arg) {
  let result = 0;
  const usedElems = []

  outer: for (let i = 0; i <= arr.length - 2; i++) {
    inner: for (let j = i + 1; j <= arr.length - 1; j++) {
      if (arr[i] + arr[j] === arg && bothElemsNotInArray(i, j, usedElems)) {
        result+= i + j;
        usedElems.push(j);
        continue outer;
      }
    }
  }

  return result
}

function bothElemsNotInArray(elem1, elem2, arr) {
  return (arr.indexOf(elem1) === -1 && arr.indexOf(elem2) === -1);
}