let pascalTriangle = function (row) {
  let result = [];
  if (row === 0) {
    return row;
  }
  result.push([1]);
  for (let i = 1; i < row; i++) {
    let ls = [];
    ls.push(1);
    for (let j = 1; j < result[i - 1].length; j++) {
      let total = result[i - 1][j - 1] + result[i - 1][j];
      ls.push(total);
    }
    ls.push(1);
    result.push([...ls]);
  }
  return result;
};

console.log(pascalTriangle(5));
