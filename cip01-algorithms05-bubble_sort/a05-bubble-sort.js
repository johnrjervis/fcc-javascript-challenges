function bubbleSort(array) {
  let unchanged = true;

  for (let i = 0; i <= array.length - 2; i++) {
    if (array[i] > array[i + 1]) {
      [array[i + 1], array[i]] = [array[i], array[i + 1]];
      unchanged = false;
    }
  }

  if (unchanged) {
    return array;
  } else {
    return bubbleSort(array);
  }
}

