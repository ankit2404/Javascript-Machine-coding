Array.prototype.myMap = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }
  return result;
}

const arr = [1, 2, 3, 4, 5, 6];
const result = arr.myMap(val => val * 2);
console.log(result);
