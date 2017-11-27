const {Readable} = require('stream');

const os = require('os');

class OS extends Readable {
  constructor() {
    super({objectMode: true});

    this.osevents = [
      'freemem',
      'loadavg',
      'totalmem',
      'uptime'
    ]
  }

  _read() {
    const events = {};

    this.osevents.forEach(event => {
      events[event] = os[event]();
    });

    this.push(JSON.stringify(events));
  }
}

module.exports = OS;
