let sentence = "An apple a day keeps the doctor away";
sentence = sentence.replace(/a/g, "*");
sentence = sentence.replace(/A/g, "*");

console.log(sentence);
