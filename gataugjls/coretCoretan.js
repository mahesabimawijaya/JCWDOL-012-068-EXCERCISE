var wordPattern = function (pattern, s) {
  pattern = pattern.split("");
  s = s.split(" ");
  pattern[0] = s[0];
  pattern[1] = s[1];
  console.log(pattern);
};

wordPattern("abba", "dog cat cat dog");
