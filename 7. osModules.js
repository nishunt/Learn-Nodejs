const os = require("os");

// information about the current user
console.log(os.userInfo());

// method returns the system uptime in seconds
console.log(`Uptime: ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: (os.freemem() / os.totalmem()) * 100,
  usedMem: ((os.totalmem() - os.freemem()) / os.totalmem()) * 100,
};

console.log(currentOS);
