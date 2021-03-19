import _ from 'lodash';

const { move } = require('feature/block/blockSlice');
const { useRef, useEffect } = require('react');
const { useDispatch } = require('react-redux');

export const useMouseMoveControl = matrix => {
  const dispatch = useDispatch();
  const boardSectionRef = useRef();

  useEffect(() => {
    if (!boardSectionRef.current) return;
    const target = boardSectionRef.current;

    target.onmousemove = _.debounce(e => {
      const { width, left } = boardSectionRef.current.getBoundingClientRect();

      if (e.clientX - left < width / 3)
        dispatch(move({ info: { axis: 'X', direction: -1 }, matrix }));
      if (e.clientX - left > (width * 2) / 3)
        dispatch(move({ info: { axis: 'X', direction: 1 }, matrix }));
    }, 400);
    return () => (target.onmousemove = null);
  });

  return boardSectionRef;
};
