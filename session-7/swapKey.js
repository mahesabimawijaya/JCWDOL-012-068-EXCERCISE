let arr1 = [
  { name: "student 1", email: "student1@gmail.com" },
  { name: "student 2", email: "student2@gmail.com" },
];
let arr2 = [
  { name: "student 1", email: "student1@gmail.com" },
  { name: "student 3", email: "student3@gmail.com" },
];

const merge = (a, b, predicate = (a, b) => a === b) => {
  const c = [...a]; // copy to avoid side effects
  // add all items from B to copy C if they're not already present
  b.forEach((bItem) =>
    c.some((cItem) => predicate(bItem, cItem)) ? null : c.push(bItem)
  );
  return c;
};

console.log(merge(arr1, arr2));
