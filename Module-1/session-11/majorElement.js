let majorityElement = function (e) {
  let most = 0;
  let item = 0;
  for (let i = 0; i < e.length; i++) {
    let many = 0;
    for (let j = i + 1; j < e.length; j++) {
      if (e[i] == e[j]) {
        many += 1;
      }
    }
    if (many > most) {
      most = many;
      item = i;
    } else if (many == most && i == e.length - 1) {
      return -1;
    }
  }
  return e[item];
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
