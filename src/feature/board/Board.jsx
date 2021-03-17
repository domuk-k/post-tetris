import { Box, Flex } from '@chakra-ui/react';
import { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoard, save, edit } from './boardSlice';

const Board = ({ matrix }) => {
  const { draft } = useSelector(selectBoard);
  const dispatch = useDispatch();
  const bodyRef = useRef(document.body);

  const moveBlock = useCallback(
    ({ key }) => {
      dispatch(edit(key));
    },
    [dispatch],
  );

  useEffect(() => {
    const target = bodyRef.current;
    target.addEventListener('keydown', moveBlock);
    return () => target.removeEventListener('keydown', moveBlock);
  }, [moveBlock]);

  useEffect(() => {
    /** edit matrix: put block on matrix right before render*/
  });

  return (
    <Flex as="section" direction="column" margin="0 auto" alignItems="center">
      {(matrix ?? draft).map((row, rowIndex) => (
        <Flex direction="row" key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <Cell key={cellIndex} isFilled={cell} />
          ))}
        </Flex>
      ))}
    </Flex>
  );
};

const Cell = ({ isFilled }) => {
  const bgColor = isFilled ? 'dimgrey' : 'lightgrey';

  return (
    <Box
      width="22px"
      height="22px"
      border="2px solid"
      borderColor={bgColor}
      padding="2px"
      margin="1px"
      _after={{
        content: `""`,
        display: 'block',
        backgroundColor: bgColor,
        height: '14px',
        width: '14px',
      }}
    />
  );
};

export default Board;
