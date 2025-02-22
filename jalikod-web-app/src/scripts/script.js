// app event bus
const AppEvent = (() => {
  const _callBacks = {};
  
  return {
    on(eventName, callback) {
      if (!_callBacks[eventName]) {
        _callBacks[eventName] = [];
      }
    
      _callBacks[eventName].push(callback);
    },
    
    off(eventName, callback) {
      const callbacks = _callBacks[eventName];
      if (!callbacks) {
        return
      }
      
      let idx = -1;
      for (let i = 0; i < callbacks.length; i++) {
        if (callbacks[i] === callback) {
          idx = i;
          break;
        }
      }
      
      if (idx < 0) {
        return
      }
      
      _callBacks[eventName].splice(idx, 1);
    },
    
    trigger(eventName) {
      const callbacks = _callBacks[eventName];
      if (!callbacks || !callbacks.length) {
        return;
      }
      
      var args = Array.prototype.slice.call(arguments, 1);
      for (let i = 0; i < callbacks.length; i++) {
        callbacks[i].apply(this, args);
      }
    }
  }
})();

//export for node.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = { AppEvent, }
} 