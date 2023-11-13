let obj1 = { a: 1 };
let obj2 = { a: 1 };

function objEqual(a, b) {
  if (JSON.stringify(a) === JSON.stringify(b)) {
    return true;
  } else {
    return false;
  }
}

console.log(objEqual(obj1, obj2));
