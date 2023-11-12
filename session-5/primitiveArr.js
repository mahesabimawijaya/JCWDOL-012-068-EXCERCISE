let primitiveArr = function (data) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] !== "object") {
      result.push(data[i]);
    }
  }
  return result;
};

console.log(primitiveArr([1, [], undefined, {}, "string", {}, []]));
