let userHeight = 170; //cm
let userWeight = 65; //kg

function bodyMassIndex(height, weight) {
  height /= 100; // convert cm to m
  let BMI = weight / (height * height);
  console.log(BMI);
  if (BMI < 18.5) {
    return "less weight";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    return "ideal";
  } else if (BMI >= 25 && BMI <= 29.9) {
    return "overweight";
  } else if (BMI >= 30 && BMI <= 39.9) {
    return "very overweight";
  } else if (BMI > 39.9) {
    return "obesity"; //gorlock the destroyer
  }
}

console.log(bodyMassIndex(userHeight, userWeight));
