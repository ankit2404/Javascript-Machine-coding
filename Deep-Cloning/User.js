const userProfile = {
  name: "Ankit",
  age: 28,
  address: {
    city: "Delhi",
    coordinates: {
      lat: 28.6139,
      long: 77.209,
    },
  },
  hobbies: ["coding", "music"],
};


function deepClone(obj) {
  // Check if obj is null or not an object (base case)
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }

  const clonedObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }

  return clonedObj;
}


let ans = deepClone(userProfile);

ans.address.city = "Bengaluru"
ans.address.coordinates.long = "19.0760"
ans.hobbies.push("Traveling")
console.log(ans)
