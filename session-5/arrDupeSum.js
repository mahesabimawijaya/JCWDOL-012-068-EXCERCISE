let arrDupeSum = function (nums) {
  let result = 0;
  let lastSum = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        result += nums[i];
        nums.splice(j, 1);
        lastSum = nums[i];
      }
    }
  }
  return result + lastSum;
};

console.log(arrDupeSum([10, 20, 40, 10, 50, 30, 10, 60, 10]));
