let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  a: 1,
  c: 3,
};

function objIntersection(a, b) {
  console.log(Object.keys(a));
  console.log(Object.keys(b));
}

objIntersection(obj1, obj2);
