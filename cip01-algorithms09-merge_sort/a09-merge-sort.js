function mergeSort(array) {
  //console.log(`mergeSort called with args: ${array}`);

  if (array.length <= 1) {
    return array;
  }

  const midpoint = Math.floor(array.length / 2);

  const first = mergeSort(array.slice(0, midpoint));
  const second = mergeSort(array.slice(midpoint));

  return merge(first, second);
}

function merge(arr1, arr2) {
  //console.log(`merge called with args: ${arr1} and ${arr2}`);

  const result = [];
  let i = 0, j = 0;

  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j] || j === arr2.length) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  return result
}