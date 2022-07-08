function selectionSort(array) {

  for (let i = 0; i < array.length - 1; i++) {

    let lowIndex = i;

    for (let j = i; j <= array.length - 1; j++) {
      if (array[j] < array[lowIndex]) {
        lowIndex = j;
      }
    }

    [array[lowIndex], array[i]] = [array[i], array[lowIndex]];

  }

  return array;
}

