const OS = require('..');

const os = new OS();

setInterval(() => {
  console.log(os.read());
}, 1000);
