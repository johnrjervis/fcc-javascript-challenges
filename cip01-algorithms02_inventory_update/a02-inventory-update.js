function updateInventory(arr1, arr2) {

  const result = [...arr1];

  for (const item2 of arr2) {
    const itemIndex = getItemIndex(item2[1], arr1);
    if (itemIndex === -1) {
      result.push(item2)
    } else {
      console.log(`${result[itemIndex]} & ${item2}`);
      result[itemIndex][0] += item2[0];
    }
  }

  return result.sort(sortInvByItemName);
}

const getItemIndex = (item, inv) => {
  const invContents = inv.map(elem => elem[1]);
  return invContents.indexOf(item);
}

const sortInvByItemName = (item1, item2) => {
  if (item1[1] < item2[1]) {
    return -1;
  } else {
    return 1;
  }
}