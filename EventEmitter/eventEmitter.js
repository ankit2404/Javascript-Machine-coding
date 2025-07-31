export default class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, listener) {
    if(! this.events[eventName] ){
      this.events[eventName] = []
    }
    this.events[eventName].push(listener)
    return this
  }


  off(eventName, listener) {
    if(! this.events[eventName] ){
      return this
    }
    const list = this.events[eventName];
    
    const index = list.indexOf(listener);
    if (index !== -1) {
      this.events[eventName].splice(index, 1); // remove only one
    }
    return this

  }

  emit(eventName, ...args) {
    if(! this.events[eventName]  || this.events[eventName].length === 0){
      return false
    }
    const list = this.events[eventName].slice();
    
      list.forEach((item) => {
        item.apply(null,args)
      })
    
    return true
  }
}