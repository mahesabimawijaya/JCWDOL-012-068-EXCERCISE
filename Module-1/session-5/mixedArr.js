let sumMixedArr = function (x) {
  let result = 0;
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] == "number") {
      result += x[i];
    }
  }
  return result;
};

console.log(sumMixedArr(["3", 1, "string", null, false, undefined, 2]));
