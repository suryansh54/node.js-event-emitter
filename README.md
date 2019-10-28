# Node.js - Event Emitter

- Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") emit named events that cause Function objects ("listeners") to be called.
- When the EventEmitter object emits an event, all of the functions attached to that specific event are called synchronously. Any values returned by the called listeners are ignored and will be discarded.

#### Example 1: Basic Event Emitter

```javascript
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
```

#### Example 2: Passing arguments and this to listeners

```javascript
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
```

#### Example 3: Asynchronous vs. Synchronous

The EventEmitter calls all listeners synchronously in the order in which they were registered. This is important to ensure the proper sequencing of events and to avoid race conditions or logic errors. When appropriate, listener functions can switch to an asynchronous mode of operation using the setImmediate() or process.nextTick() methods:

```javascript
const events = require('events');
const myEmitter = new events.EventEmitter();

myEmitter.on('event', (a, b) => {
    setImmediate(() => {
        console.log('this happens asynchronously');
    });
});
myEmitter.emit('event', 'a', 'b');

console.log("Last line in file");

// Last line in file
// this happens asynchronously
```

#### Example 4: Multiple emit

```javascript
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
```

#### Example 5: Handling events only once

Using the eventEmitter.once() method, it is possible to register a listener that is called at most once for a particular event. Once the event is emitted, the listener is unregistered and then called.

```javascript
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
```

#### Example 6: Error events

```javascript
const events = require('events');
const myEmitter = new events.EventEmitter();

myEmitter.on('error', (err) => {
  console.error('whoops! there was an error');
});
myEmitter.emit('error', new Error('whoops!'));
// Prints: whoops! there was an error
```
