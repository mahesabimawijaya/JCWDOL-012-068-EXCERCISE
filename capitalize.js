let sentence = "hello world";
let splitSen = sentence.toLowerCase().split(" ");

for (let i = 0; i < splitSen.length; i++) {
  splitSen[i] = splitSen[i].charAt(0).toUpperCase() + splitSen[i].substring(1);
}

console.log(splitSen.join(" "));
