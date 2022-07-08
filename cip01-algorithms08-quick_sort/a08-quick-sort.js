function quickSort(array) {

  if (array.length <= 1) {

    return array;

  } else {

    const pivot = array[0];
    const lower = [];
    const higher = [];

    for (let i = 1; i < array.length; i++) {
      if (array[i] < pivot) {
        lower.push(array[i])
      } else {
        higher.push(array[i])
      }
    }

    return quickSort(lower).concat([pivot]).concat(quickSort(higher));

  }
}