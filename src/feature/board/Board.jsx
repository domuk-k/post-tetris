import { Box, Flex, Heading } from '@chakra-ui/react';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBlock, move, next } from 'feature/block/blockSlice';
import { selectBoard, write, save, gameover } from 'feature/board/boardSlice';
import { useKeyDown } from 'hooks';
import { readKey } from 'utils';

const Board = () => {
  const { draft, saved, hasToplineTouched } = useSelector(selectBoard);
  const block = useSelector(selectBlock);
  const dispatch = useDispatch();

  const onKeyDown = useCallback(
    ({ key }) => {
      // validate key
      dispatch(move({ info: readKey(key), matrix: saved }));
    },
    [dispatch, saved],
  );

  const moveDown = useCallback(() => {
    dispatch(move({ info: { axis: 'X', direction: 1 }, matrix: draft }));
  }, [dispatch, draft]);

  useKeyDown(onKeyDown);

  useEffect(() => {
    dispatch(write(block));
    if (block.settled) {
      dispatch(save());
      if (hasToplineTouched) {
        dispatch(gameover());
        return;
      }
      dispatch(next());
    }
  }, [block, dispatch, hasToplineTouched]);

  useEffect(() => {}, [moveDown]);

  return (
    <Flex as="section" direction="column" margin="0 auto" alignItems="center">
      {hasToplineTouched && <Heading>GAME OVER</Heading>}
      {draft.map((row, rowIndex) => (
        <Flex direction="row" key={rowIndex}>
          {row.map(({ isFilled, color }, cellIndex) => (
            <Cell key={cellIndex} isFilled={isFilled} color={color} />
          ))}
        </Flex>
      ))}
    </Flex>
  );
};

const Cell = ({ isFilled, color }) => {
  const cellColor = isFilled ? color : 'lightgrey';
  return (
    <Box
      width="22px"
      height="22px"
      border="2px solid"
      borderColor={cellColor}
      padding="2px"
      margin="1px"
      _after={{
        content: `""`,
        display: 'block',
        backgroundColor: cellColor,
        height: '14px',
        width: '14px',
      }}
    />
  );
};

export default Board;
