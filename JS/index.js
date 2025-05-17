const height = prompt("Skriv in din längd i cm");
const weight = prompt("Skriv in din vikt i kg");

function calcBMI(height, weight) {
  const BMI = weight / ((height / 100) * (height / 100));
  return BMI;
}

const BMI = calcBMI(height, weight);
console.log(BMI);

if (BMI < 18.5) {
  console.log("Ditt BMI-värde är Undervikt");
} else if (BMI >= 18.5 && BMI < 25) {
  console.log("Ditt BMI-värde är Normalvikt");
} else if (BMI >= 25 && BMI < 30) {
  console.log("Ditt BMI-värde är Övervikt");
} else if (BMI >= 30) {
  console.log("Ditt BMI-värde är Fetma");
}
