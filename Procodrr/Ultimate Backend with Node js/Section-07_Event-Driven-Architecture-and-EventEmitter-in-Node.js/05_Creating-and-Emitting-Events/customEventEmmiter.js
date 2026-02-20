class MyEventEmitter {
  constructor() {
    this._events = {};
  }

  on(eventName, handler) {
    if (this._events[eventName]) {
      this._events[eventName].push(handler);
    } else {
      this._events[eventName] = [handler];
    }
    
}

  emit(eventName, ...args) {
    this._events[eventName]?.forEach((event) => {
      event(...args);
    });
  }
}

const emitter = new MyEventEmitter();

emitter.on("x", () => {
  console.log("Emitted event x 1");
});
emitter.on("x", () => {
  console.log("Emitted event x 1");
});
emitter.once("y", () => {
  console.log("Emitted event y 1");
});
emitter.once("y", (a, b, c, d) => {
  console.log("Emitted event y 1");
  console.log(a, b, c, d);
});

emitter.emit("y", 1, 2, 3, 4, 5, 6, 7);
