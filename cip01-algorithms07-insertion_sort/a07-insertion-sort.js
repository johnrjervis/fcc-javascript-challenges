function insertionSort(array) {

  for (let i = 1; i < array.length; i++) {

    for (let j = i; j >= 1; j--) {
      if (array[j] < array[j - 1]) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
      }
    }

  }

  return array;
}

