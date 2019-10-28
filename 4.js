// Example 4: Multiple emit

const events = require('events');
const myEmitter = new events.EventEmitter();

let m = 0;
myEmitter.on('event', () => {
  console.log(++m);
});
myEmitter.emit('event');
// Prints: 1
myEmitter.emit('event');
// Prints: 2