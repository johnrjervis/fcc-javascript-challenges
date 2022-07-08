function merge() {
  console.log(`merge called with args: ${arguments[0]} and ${arguments[1]}`);
  if (arguments.length === 1) {
    return arguments[0];
  }

  const mergedArray = [];
  let i = 0, j = 0;

  const array1 = arguments[0];
  const array2 = arguments[1];
  
  while (i < array1.length || j < array2.length) {
    if (array1[i] < array2[j] || j === array2.length) {
      mergedArray.push(array1[i]);
      i++;
    } else {
      mergedArray.push(array2[j]);
      j++;
    }
  }

  let newArgs = [];

  // Move existing arguments to the front of the queue
  for (let i = 2; i < arguments.length; i++) {
    newArgs.push(arguments[i]);
  }

  newArgs.push(mergedArray);

  return merge(...newArgs);
}