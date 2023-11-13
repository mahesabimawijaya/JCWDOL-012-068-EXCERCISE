let input = 15;

function fizzBuzz(iterator) {
  for (let i = 1; i <= iterator; i++) {
    let a = i;
    if (a % 3 == 0 && a % 5 == 0) {
      a = "FizzBuzz";
    } else if (a % 3 == 0) {
      a = "Fizz";
    } else if (a % 5 == 0) {
      a = "Buzz";
    }
    console.log(a);
  }
}

fizzBuzz(input);
