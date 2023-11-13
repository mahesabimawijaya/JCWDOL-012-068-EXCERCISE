//DECLARE NUMBER
//DECLARE RESULT
//FOR I EQUALS NUMBER; I GREATER THAN ZERO; I DECREMENT
//  RESULT EQUALS RESULT TIMES I
//PRINT RESULT

let number = 4;
let result = 1;

for (let i = number; i > 0; i--) {
  result *= i;
}
console.log(`factorial of ${number} is ${result}`);
