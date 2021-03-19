const { useEffect } = require('react');

export const useAutoFall = (callback, ms) => {
  useEffect(() => {
    let id = setTimeout(() => callback(), ms);
    return () => clearTimeout(id);
  }, [callback, ms]);
};
