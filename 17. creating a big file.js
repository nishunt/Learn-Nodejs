const { writeFileSync } = require("fs");

for (let i = 0; i < 10 ** 4; i++) {
  writeFileSync("./content/big.txt", `hello world ${i}\n`, { flag: "a" });
}
