let sentence = "Hello World";
let word = "ell";
let index = sentence.indexOf(word);

if (index === -1) {
  console.log(sentence);
}
console.log(sentence.slice(0, index) + sentence.slice(index + word.length));
