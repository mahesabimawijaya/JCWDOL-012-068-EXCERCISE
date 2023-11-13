//DECLARE NUMBERS TYPEOF ARRAY
//DECLARE PRIME TYPEOF BOOLEAN = TRUE
//FOREACH NUMBERS DO :
//  FOR I EQUALS 2; I LESS THAN NUMBER; I INCREMENT
//      IF NUMBER MODULO I EQUALS ZERO
//          PRIME EQUALS FALSE
//          BREAK
//  IF PRIME = TRUE
//      PRINT $NUMBERS IS A PRIME NUMBER
//  ELSE
//      PRINT $NUMBERS IS NOT A PRIME NUMBER

let numbers = [7, 6];
let prime = true;

numbers.forEach((e) => {
  for (let i = 2; i < e; i++) {
    if (e % i == 0) {
      prime = false;
      break;
    }
  }
  if (prime) {
    console.log(`${e} is a prime number`);
  } else {
    console.log(`${e} is not a prime number`);
  }
});
