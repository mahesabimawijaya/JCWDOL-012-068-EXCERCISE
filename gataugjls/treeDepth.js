var isPowerOfTwo = function (n) {
  let power = 0;
  let number = 0;
  let flag = true;

  for (let i = 0; i <= n; i++) {
    power = i;
    number = 2 ** power;
    if (n % number !== 0) {
      flag = false;
    }
  }
  return flag;
};

console.log(isPowerOfTwo(8));
