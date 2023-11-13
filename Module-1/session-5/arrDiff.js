let arrDiff = function (x, y) {
  let result = [];
  let flag = true;
  let newArr = y;

  if (x.length !== y.length) {
    return -1;
  }
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x.length; j++) {
      if (x[i] == y[j]) {
        newArr.splice([j], 1);
        flag = false;
        break;
      }
    }
    if (flag) {
      result.push(x[i]);
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    result.push(newArr[i]);
  }
  console.log(result);
};

arrDiff([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
