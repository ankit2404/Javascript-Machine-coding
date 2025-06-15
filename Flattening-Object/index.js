const person = {
  name: "Ankit",
  address: {
    city: "Delhi",
    coordinates: {
      lat: 28.6139,
      long: 77.2090
    }
  },
  hobbies: ["coding", "music"]
};

let result = {}

function flattenObject(obj,parentKey) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        flattenObject(obj[key], newKey);
      } else {
        result[newKey] = obj[key];
      }
    }
  }

  return result;
}

let ans = flattenObject(person, "")

console.log(ans)