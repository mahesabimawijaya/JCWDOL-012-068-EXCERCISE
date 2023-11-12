let maxProfit = function (prices) {
  let newArr = [];
  let min = Math.min(...prices);
  for (let i = prices.indexOf(min); i < prices.length; i++) {
    newArr.push(prices[i]);
  }
  let max = Math.max(...newArr);
  return max - min;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
