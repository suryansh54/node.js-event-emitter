// Example - 1: Basic Event Emitter

const events = require('events');
const myEmitter = new events.EventEmitter();
// OR
/* class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter(); */

myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');

// Output "an event occurred!"