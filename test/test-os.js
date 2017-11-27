const {Writable} = require('stream');

const Test = require('tape');
const OS = require('..');

Test('os', t => {
  let os = null;

  t.test('instantiate', t => {
    os = new OS();

    t.equals(typeof os, 'object');
    t.end();
  });

  t.test('single read', t => {
    const stats = os.read();
    // stats

    t.equals(typeof stats, 'string');
    t.end();
  });

  t.test('data listener', t => {
    os.once('data', stats => {
      t.end();
    });
  });

  t.test('pipe', t => {
    const writer = new Writable({
      write(chunk, enc, callback) {
        callback();
      }
    });

    writer.on('pipe', src => {
      console.log(src instanceof OS);
      t.ok(src instanceof OS);
      os.destroy();
      t.end();
    });

    os.pipe(writer);
  });

});
