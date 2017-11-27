const OS = require('..');

const {Writable} = require('stream');

const os = new OS();

const writer = new Writable({
  write(chunk, enc, callback) {
    callback();
  }
});

writer.on('pipe', src => {
  console.log(src);
});

os.once('data', data => {
  console.log(data);
  os.destroy();
});

os.pipe(writer);
