let input = 4;

function pyramide(height) {
  let result = 1;
  for (let i = 0; i < height; i++) {
    let s = "";
    for (let j = 0; j <= i; j++) {
      if (result < 10) {
        s += "0" + result++ + " ";
      } else {
        s += result++ + " ";
      }
    }
    console.log(s);
  }
}
pyramide(input);
