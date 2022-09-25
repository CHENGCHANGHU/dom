/**
 * Query HTML element and cache queried elements
 */
const query = (() => {
  const cache = new Map();
  return (queryString) => {
    if (!cache.has(queryString)) {
      const ele = document.querySelector(queryString);
      if (!ele) {
        return null;
      }
      cache.set(queryString, ele);
    }

    return cache.get(queryString);
  }
})();

export {
  query,
};
