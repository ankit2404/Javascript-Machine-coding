export default function promiseRace(iterable) {
  return new Promise((resolve, reject) => {
    const items = Array.from(iterable);

    if (items.length === 0) {
      // Stays pending forever, like native Promise.race([])
      return;
    }

    items.forEach((item) => {
      (async () => {
        try {
          const result = await item;
          resolve(result);
        } catch (err) {
          reject(err);
        }
      })();
    });
  });
}
