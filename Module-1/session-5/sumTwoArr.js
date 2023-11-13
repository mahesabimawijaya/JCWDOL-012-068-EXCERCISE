let arr1 = [1, 2, 3];
let arr2 = [3, 2, 1];

function arrSum(arr1, arr2) {
  let newArr = [];
  if (arr1.length !== arr2.length) {
    return "both arrays must have the same length!";
  }
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i] + arr2[i]);
  }
  return newArr;
}

console.log(arrSum(arr1, arr2));
