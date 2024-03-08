function sumOfTwoNum() {
  const num1 = parseInt(prompt("First number: "));
  const num2 = parseInt(prompt("Second number: "));

  const result = num1 + num2;
  return result;
}

function areaOfTriangle(base, height) {
  const areaValue = (base * height) / 2;

  console.log(`The area of the triangle is ${areaValue}`);
}

function fibonacciNumber() {
  const number = parseInt(prompt("Enter the number of terms: "));
  let n1 = 0,
    n2 = 1,
    nextTerm;

  console.log("Fibonacci Series:");

  for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}
