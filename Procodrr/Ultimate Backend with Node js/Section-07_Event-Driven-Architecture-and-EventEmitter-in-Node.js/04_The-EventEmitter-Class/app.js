import EventEmitter from "events";

const emitter = new EventEmitter();

// emitter.setMaxListeners(1)

emitter.on("x", () => {
  console.log("x event fired 2");
});
emitter.on("x", () => {
  console.log("x event fired 2");
});
emitter.on("x", () => {
  console.log("x event fired 2");
});
emitter.on("x", () => {
  console.log("x event fired 2");
});

emitter.on("y", () => {
  console.log("y event fired 1");
});
emitter.once("abc", () => {
    console.log("y event fired 1");
});


emitter.emit("abc");
console.log(emitter);
emitter.emit("abc");
console.log(emitter._events);

