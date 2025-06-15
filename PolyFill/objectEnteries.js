 Object.entries =  function (obj) {
  let arr = [];
  for(let key in obj) {
    let a = []
    a.push(key)
    a.push(obj[key])
    arr.push(a)
  }
  return arr;
};
const obj =  {
  name: "Ankit",
  age: 25,
  city: "Delhi"
};
console.log(Object.entries(obj));
