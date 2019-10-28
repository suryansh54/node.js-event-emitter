// Example - 2: Passing arguments and this to listeners

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on('event', function(a, b) {
  console.log(a, b, this, this === myEmitter);
});
myEmitter.emit('event', 'a', 'b');

  // Prints:
  //   a b MyEmitter {
  //     domain: null,
  //     _events: { event: [Function] },
  //     _eventsCount: 1,
  //     _maxListeners: undefined } true