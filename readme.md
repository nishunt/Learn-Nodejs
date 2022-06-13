# Node Tutorial [[Link](https://www.youtube.com/watch?v=Oe421EPjeBE&t=9493s)]

`Date - Jun 13 2022`

> **Definition**: Nodejs is an environment to run Javascript outside the browser.

There are two ways of using Node:

1. `REPL`: less often used, only for playing around with the code and quick testing
   - type `node` inside the terminal and use.
2. `CLI`: more often used

## Global Variables

- `__dirname` - path to current directory
- `__filename` - file name
- `require` - function to use modules in CommonJS (similar to `import` in ES module)
- `module` - info about current module (file)
- `process` - info about environment where the program is being executed

## Nodemon

> Nodemon package is used to watch the changes and adapt during the runtime(Like we are used to in react).

- `npm install nodemon`
- use `nodemon yourFileName` instead of `node yourFileName`
- To embed it with npm, go to package.json and find scripts

  ```javascript
  "scripts": {
  // in terminal: npm start
  "start": "nodemon yourFileName.js",
  //in terminal: npm run dev
  "dev": "nodemon yourFileName.js"
  }
  ```

## Version Nomenclature

- First digit: Major change(might not be backward compatible)
- Second digit: Minor change(backward compatible)
- Third digit: Batch

> **package-lock.json** has details of versions of packages as well as packages of those packages.
