//latihan object
let car = {
  //literal
  brand: "BMW",
  model: "M2 Competition",
  price: 100000,
};
console.log(car.brand);

let user = new Object(); //constructor
console.log(user);

let player = {
  name: "David",
  greet() {
    //method
    console.log("Hello!");
  },
};
console.log(player.greet());
console.log(Object.keys(player));

let student = {
  name: "Mahesa",
  age: 20,
};

for (let key in student) {
  console.log(key);
  console.log(student[key]);
}
