export default function promiseAny(iterable) {
  return new Promise((resolve, reject) => {
    const items = Array.from(iterable);
    const errors = [];
    let remaining = items.length;

    if (remaining === 0) {
      reject(new AggregateError([], 'All promises were rejected'));
      return;
    }

    items.forEach((item, index) => {
      (async () => {
        try {
          const result = await item; // works for both values and Promises
          resolve(result);
        } catch (err) {
          errors[index] = err;
          remaining--;
          if (remaining === 0) {
            reject(new AggregateError(errors, 'All promises were rejected'));
          }
        }
      })();
    });
  });
}
