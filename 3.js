// Example - 3: Asynchronous vs. Synchronous

const events = require('events');
const myEmitter = new events.EventEmitter();
// OR
/* class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter(); */

myEmitter.on('event', (a, b) => {
    setImmediate(() => {
        console.log('this happens asynchronously');
    });
});
myEmitter.emit('event', 'a', 'b');

console.log("Last line in file");

// Last line in file
// this happens asynchronously