let p = [1, 2];
let q = [1, null, 2];

var isSameTree = function (p, q) {
  let flag = true;
  if (p.length !== q.length) {
    flag = false;
  } else {
    for (let i = 0; i < p.length; i++) {
      if (p[i] !== q[i]) {
        flag = false;
      }
    }
  }
  return flag;
};

console.log(isSameTree(p, q));
