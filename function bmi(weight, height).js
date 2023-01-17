function bmi(weight, height) {
let bim = weight/ Math.pow(height, 2);
let result;

if (bim > 30) {
  result = 'Obese'
} else if (bim >= 25 && bim < 30) {
  result = 'Overweight'
} else if (bim >= 18 && bim < 25 ) {
  result = 'Normal'
} else {
  result = 'Underweight'
}

  return result;
}
