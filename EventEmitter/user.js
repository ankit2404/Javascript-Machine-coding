const EventEmitter = require('events')

const emitter = new EventEmitter();

// Define a listener function
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Define one more listener function
function checkIn(name) {
  console.log(`Hello, ${name}! this is the best room in our hotel please let me know if u need anything else`);
}
// Subscribe to the 'welcome' event
emitter.on('welcome', greet);

// Subscribe to the 'welcome' event
emitter.on('welcome', checkIn);

// Emit the 'welcome' event with data
emitter.emit('welcome', 'Ankit');  // Output: Hello, Ankit!

// Remove the listener
emitter.off('welcome', greet);

console.log("Removed the greet event")
// Emit again (no output now, since listener is removed)
emitter.emit('welcome', 'Ankit');
