let arr = [10, 55, 79, 32];

function findMaxValue(arrInput) {
  let maxValue = 0;

  for (let i = 0; i <= arrInput.length; i++) {
    if (maxValue < arrInput[i]) {
      maxValue = arrInput[i];
    }
  }
  return maxValue;
}

console.log(findMaxValue(arr));
