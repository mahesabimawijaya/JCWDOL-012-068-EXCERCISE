let string = "katak";
let len = string.length;
let palindrome = true;

for (let i = 0; i < len / 2; i++) {
  if (string[i] !== string[len - 1 - i]) {
    palindrome = false;
  }
}
if (palindrome) {
  console.log(`${string} is a palindrome`);
} else {
  console.log(`${string} is not a palindrome`);
}
