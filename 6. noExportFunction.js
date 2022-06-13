const num1 = 5;
const num2 = 10;

function addValues() {
  console.log(`the sum is ${num1 + num2}`);
}

addValues();

// when this file is imported, it will execute the above function despite us not exporting anything here and not explicitly calling anything in the file that is importing this file.
