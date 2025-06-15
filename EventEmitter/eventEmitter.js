export class EventEmitter {
  constructor() {
    // Stores event names as keys and arrays of listener functions as values
    this.events = {};
  }

  // Method to register a listener for an event
  on(eventName, listener) {
    // If the event does not exist yet, initialize it with an empty array
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    // Add the listener function to the list for this event
    this.events[eventName].push(listener);
  }

  // Method to emit (trigger) an event and pass data to listeners
  emit(eventName, data) {
    const listeners = this.events[eventName];

    if (listeners) {
      // Call each listener function with the provided data
      listeners.forEach((listener) => {
        listener(data);
      });
    }
  }

  // Method to remove a specific listener for an event
  off(eventName, listenerToRemove) {
    const listeners = this.events[eventName];

    if (listeners) {
      this.events[eventName] = listeners.filter(
        (listener) => listener !== listenerToRemove
      );
    }
  }
}


