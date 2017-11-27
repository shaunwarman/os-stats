const OS = require('..');

const os = new OS();

os.on('data', data => {
  console.log(data);
});

os.pause();

setTimeout(() => {
  os.resume();
}, 5000);
