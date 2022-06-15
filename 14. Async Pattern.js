const { readFile, writeFile } = require("fs").promises;

const util = require("util");

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// with async-await and catch
const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf-8");
    const second = await readFile("./content/second.txt", "utf-8");
    const forth = await readFile("./content/forth.txt", "utf-8");
    await writeFile(
      "./content/forth.txt",
      "forth file created using promisified writeFile",
      { flag: "a" }
    );
    console.log(first, "\n", second, "\n", forth);
  } catch (err) {
    console.log(err);
  }
};
start();

// with then and catch
// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
