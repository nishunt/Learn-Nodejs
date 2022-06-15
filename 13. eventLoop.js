const { readFile } = require("fs");

console.log("start");

// as because the readFile is an Async function it will get offloaded from the flow of code at the time of execution and will be executed only when the sync flow is complete and it returns something.
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("complete");
});
console.log("end");
