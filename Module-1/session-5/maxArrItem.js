let size = 5;

function maxArrItem(maxSize, ...numbers) {
  let arr = [];
  for (let i = 0; i < maxSize; i++) {
    arr.push(numbers[i]);
  }
  console.log(arr);
}

maxArrItem(size, 5, 10, 24, 3, 6, 7, 8);
