export default function promiseAllSettled(iterable) {
  return new Promise((resolve) => {
    const items = Array.from(iterable); // to ensure we can get length and index
    const result = new Array(items.length);
    let unresolved = items.length;

    if (unresolved === 0) {
      resolve(result);
      return;
    }

    items.forEach(async (item, index) => {
      try {
        const value = await item;
        result[index] = { status: 'fulfilled', value };
      } catch (err) {
        result[index] = { status: 'rejected', reason: err };
      } finally {
        unresolved--;
        if (unresolved === 0) {
          resolve(result);
        }
      }
    });
  });
}
