const b = loadModule("./math.js");

console.log(b);

function loadModule(path) {
  const fs = require("fs");
  if (!path.endsWith(".js")) {
    path = `${path}.js`;
  }
  const fileContent = fs.readFileSync(path).toString();
  console.log(fileContent);

  (function (send) {
    eval(fileContent);
    console.log(send);
  })({});
}
