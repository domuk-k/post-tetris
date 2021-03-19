import { useEffect, useRef } from 'react';

let removeKeyDownListener;

export const useKeyDown = callback => {
  const docRef = useRef(document);

  if (!removeKeyDownListener)
    removeKeyDownListener = () => (docRef.current.onkeydown = null);

  useEffect(() => {
    const target = docRef.current;
    target.onkeydown = callback;
    return () => (target.onkeydown = null);
  }, [callback]);

  return {
    removeKeyDownListener,
  };
};
