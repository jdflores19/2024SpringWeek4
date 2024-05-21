// define/extend EventEmitter class
const http = require("http");
const fs = require("fs");
const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}

// Uppercase at the beginning of a Class definition
// Lowercase at the beginning of an object definition

//initialize a new emitter object
const myEmitter = new MyEmitter();
// bind the "example" event and set the callback function
myEmitter.addListener("example", () => console.log("event has been emitted"));
myEmitter.on("example", () => console.log("my second event has been emitted"));
myEmitter.once("example", () => console.log("my third event has been emitted"));

// fire the example event
console.log("\nEMIT (fire) the event");
const firstExample = () => myEmitter.emit("example");
firstExample();
