let secSmall = function (nums) {
  let min = 99999;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (min == nums[i]) {
      nums.splice(i, 1);
    }
  }
  min = 99999;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
  }
  return min;
};

console.log(secSmall([5, 3, 1, 7, 2, 6]));
