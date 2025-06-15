Array.prototype.myFilter = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
}

const arr = [1,2,3,4,5,6];
const result = arr.myFilter(val => val % 2 === 0);
console.log(result);
