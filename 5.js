// Example 5: Handling events only once

const events = require('events');
const myEmitter = new events.EventEmitter();

let m = 0;
myEmitter.once('event', () => {
  console.log(++m);
});
myEmitter.emit('event');
// Prints: 1
myEmitter.emit('event');
// Ignored
