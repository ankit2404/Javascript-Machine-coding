
export default function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const result = new Array(iterable.length);
    let unresolved = iterable.length;
    if(unresolved == 0){
       resolve(result);
       return;
    }
    iterable.forEach(async(item,index) => {
      try{
        const value = await item;
        result[index] = value;;
        unresolved -= 1;

        if(unresolved == 0){
          resolve(result);
        }
      }catch(err){
        reject(err)
      }
    })
  })

}