// Example 6: Error events

const events = require('events');
const myEmitter = new events.EventEmitter();

myEmitter.on('error', (err) => {
  console.error('whoops! there was an error');
});
myEmitter.emit('error', new Error('whoops!'));
// Prints: whoops! there was an error