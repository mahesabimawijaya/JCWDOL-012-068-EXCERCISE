//DECLARE NUMBERS TYPEOF ARRAY
//DECLARE NUMBERSSUMMATION TYPEOF ARRAY
//DECLARE RESULT TYPEOF INTEGER
//  FOREACH NUMBERS DO :
//      FOR I EQUALS 1; I LESSER THAN EQUALS NUMBERS; I INCREMENT
//          RESULT EQUALS NUMBERS PLUS 1 TIMES NUMBERS DIVIDED BY 2
//          PUSH I TO NUMBERSSUMMATION
//          IF LENGTH OF NUMBERSSUMMATION GREATER THAN NUMBERS
//            NUMBERSSUMMATION [1]
//      PRINT NUMBERSSUMMATION WITH JOIN +
//      PRINT RESULT

let numbers = [5, 3];
let numbersSummation = [];
let result = 0;

numbers.forEach((e) => {
  for (let i = 1; i <= e; i++) {
    numbersSummation.push(i);
    if (numbersSummation.length > e) {
      numbersSummation = [1];
    }
  }
  result = (e * (e + 1)) / 2;
  console.log(numbersSummation.join(" + "));
  console.log(`the result is ${result}`);
});
