//DECLARE NUMBERS TYPEOF ARRAY
//FOREACH NUMBERS DO :
//  IF NUMBERS MODULO 2 EQUALS ZERO
//      PRINT $NUMBERS IS AN EVEN NUMBER
//  ELSE
//      PRINT $NUMBERS IS AN ODD NUMBER

let numbers = [25, 2];

numbers.forEach((e) => {
  if (e % 2 == 0) {
    console.log(`${e} is an even number`);
  } else {
    console.log(`${e} is an odd number`);
  }
});
