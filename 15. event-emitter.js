const EventEmitter = require("events");
// declare a new Event
const customEmitter = new EventEmitter();

// define the event with name of the event and task
customEmitter.on("response", (name, id) => {
  console.log(`data received ${name + id}`);
});

customEmitter.on("response", () => {
  console.log(`data received 2`);
});

// fire the event with name of the event, and the arguments
customEmitter.emit("response", "tony", 33);
