Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
      accumulator = callback(accumulator,this[i])
  }
  return accumulator;
};
const arr = [1, 2, 3, 4];
console.log(arr.myReduce((total, elem) => total + elem,0));
console.log(arr.myReduce((prod, elem) => prod * elem,1));
