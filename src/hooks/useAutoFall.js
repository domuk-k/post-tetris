const { useLayoutEffect } = require('react');

export const useAutoFall = (callback, ms) => {
  useLayoutEffect(() => {
    let id = setTimeout(() => callback(), ms);
    return () => clearTimeout(id);
  }, [callback, ms]);
};
