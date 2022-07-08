function bubbleSort(arr) {
  let unchanged = true;

  for (let i = 0; i <= arr.length - 2; i++) {
    if (arr[i] > arr[i + 1]) {
      arr = swapAtIndex(arr, i);
      unchanged = false;
    }
  }

  if (unchanged) {
    return arr;
  } else {
    return bubbleSort(arr);
  }
}

function swapAtIndex(arr, ind) {
  const newArr = [arr[ind + 1], arr[ind]];
  const end = arr.splice(ind + 2, arr.length);
  const start = arr.splice(0, ind);
  return start.concat(newArr).concat(end);
}