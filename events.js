const events = require('events');

const emitter = new events.EventEmitter();

emitter.on('customEvent', (name) => {
    console.log(name);
});

emitter.emit('customEvent', 'Vaibhav Singhal');



