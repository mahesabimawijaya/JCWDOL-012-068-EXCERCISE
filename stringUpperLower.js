let str = "tHE qUIcK bRoWn fOX";
let swappedStr = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] == str[i].toUpperCase()) {
    swappedStr += str[i].toLowerCase();
  } else {
    swappedStr += str[i].toUpperCase();
  }
}
console.log(swappedStr);
