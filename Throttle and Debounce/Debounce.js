let timer ;
  const myFn = function( ...args) {
    const context = this
    clearTimeout(timer)
   timer =  setTimeout(function() {
    func.apply(context, args)
   }, wait)
  }
  return myFn