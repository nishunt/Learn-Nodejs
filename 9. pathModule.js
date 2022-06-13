const path = require("path");

console.log(path.sep);

// join path method
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

// find the result file's name from the path
const base = path.basename(filePath);
console.log(base);

// find absolute path to a file

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(path.join(__dirname, "content", "subfolder", "test.txt"));
console.log(absolute);
