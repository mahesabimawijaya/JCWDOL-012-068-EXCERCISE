//DECLARE FIBONACCI CLASS
//  SET N AS CONSTRUCTOR
//      SET THIS N EQUALS N
//  OUTPUT
//      DECLARE RESULT
//      DECLARE FN
//      DECLARE FN - 1
//      DECLARE FN - 2
//      FOR I EQUALS ZERO; I LESSER THAN THIS N; I INCREMENT
//          PUSH FN TO RESULT
//          FN EQUALS (FN - 2) + (FN - 1)
//          SET FN - 2 EQUALS FN - 1 (FOR THE NEXT LOOP)
//          SET FN - 1 EQUALS FN
//      RETURN RESULT WITH JOIN METHOD
//  DECLARE NUMBER AS NEW FIBONACCI
//  PRINT NUMBER OUTPUT

class Fibonacci {
  constructor(n) {
    this.n = n;
  }

  output() {
    let result = [];
    let fn = 1;
    let fn1 = 1;
    let fn2 = 0;

    for (let i = 0; i < this.n; i++) {
      result.push(fn);
      fn = fn2 + fn1;
      fn2 = fn1;
      fn1 = fn;
    }
    return result.join(", ");
  }
}

let number = new Fibonacci(15);
console.log(number.output());
