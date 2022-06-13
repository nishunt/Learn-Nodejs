// In commonJS, every file is a module
// Modules - Encapsulated Code(only share minimum)

const names = require("./4. firstModules");
const sayHi = require("./5. secondModules");
require("./6. noExportFunction");

// sayHi("nishant");
// sayHi(names.name1);
// sayHi(names.name2);
