const { readFileSync, writeFileSync } = require("fs");

// reading a file

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
console.log(first, "\n", second);

// writing a file, deletes the previously stored value
// to append, add third argument ie. { flag: "a"}

writeFileSync(
  "./content/third.txt",
  `Here is the final result \n${first} \n${second}`,
  { flag: "a" }
);
