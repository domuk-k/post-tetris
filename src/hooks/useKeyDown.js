import { useEffect, useRef } from 'react';

export const useKeyDown = callback => {
  const docRef = useRef(document);

  useEffect(() => {
    const target = docRef.current;
    target.onkeydown = callback;
    return () => (target.onkeydown = null);
    // target.removeEventListener('keyup', callback, false);
  }, [callback]);
};
