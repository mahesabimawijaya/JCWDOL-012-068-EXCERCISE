function findDupeArr(arr) {
  let result = [];
  let duplicate = null;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (
        arr[i] == arr[j] &&
        i != j &&
        duplicate !== arr[i] &&
        i < arr.length - 1
      ) {
        duplicate = arr[i];
        result.push(duplicate);
      }
    }
  }

  return result;
}

console.log(findDupeArr([1, 2, 2, 2, 3, 3, 4, 5, 5]));
