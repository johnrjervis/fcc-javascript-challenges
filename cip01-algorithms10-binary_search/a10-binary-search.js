function binarySearch(searchList, value, arrayPath = []) {

  if (searchList.length === 0) {
    return 'Value Not Found';
  }

  const searchIndex = Math.floor((searchList.length - 1) / 2);
  const searchValue = searchList[searchIndex];

  arrayPath.push(searchValue);

  if (searchValue === value) {

    return arrayPath;

  } else if (value < searchValue) {

    const newSearchList = searchList.slice(0, searchIndex);
    return binarySearch(newSearchList, value, arrayPath);

  } else {

    const newSearchList = searchList.slice(searchIndex + 1);
    return binarySearch(newSearchList, value, arrayPath);

  }
}

