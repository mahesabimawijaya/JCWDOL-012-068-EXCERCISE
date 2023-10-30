let arr = [12, 5, 23, 18, 4, 45, 32];

//manual
function lowHighAverage(data) {
  let maxValue = 0;
  let average = 0;
  let minValue = data[0];

  for (i = 0; i < data.length; i++) {
    if (maxValue < data[i]) {
      maxValue = data[i];
    }
    if (data[i] < minValue) {
      minValue = data[i];
    }
    average += data[i] / data.length;
  }
  console.log(
    "lowest = ",
    minValue,
    ", highest = ",
    maxValue,
    ", average = ",
    average
  );
}

//sort
function sortArray(data) {
  let sortedArr = data.sort(function (a, b) {
    return a - b;
  });
  let average = 0;
  let maxValue = sortedArr[sortedArr.length - 1];
  let minValue = sortedArr[0];
  for (i = 0; i < data.length; i++) {
    average += data[i] / data.length;
  }
  console.log(
    "lowest = ",
    minValue,
    ", highest = ",
    maxValue,
    "average = ",
    average
  );
}

lowHighAverage(arr);
sortArray(arr);
