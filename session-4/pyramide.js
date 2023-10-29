let input = 5;
let row = "";

function pyramide(height) {
  for (let i = 1; i <= height; i++) {
    row = row + " " + i;
    console.log(row);
  }
}

pyramide(input);
