import { Flex, Heading } from '@chakra-ui/react';
import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBlock, move, next, moveStraightDown } from 'feature/block/blockSlice';
import { selectBoard, write, save, gameover } from 'feature/board/boardSlice';
import { addScore, selectLevelInfo } from 'feature/game/gameSlice';
import { useAutoFall, useKeyDown, useMouseMoveControl } from 'hooks';
import { readArrowKey } from 'utils';
import Matrix from 'components/Matrix';

const Board = () => {
  const { draft, saved, hasToplineTouched } = useSelector(selectBoard);
  const { speed } = useSelector(selectLevelInfo);
  const block = useSelector(selectBlock);
  const dispatch = useDispatch();
  const boardSectionRef = useMouseMoveControl(draft);

  const moveDown = useCallback(() => {
    dispatch(move({ info: { axis: 'Y', direction: 1 }, matrix: draft }));
  }, [dispatch, draft]);

  const onKeyDown = useCallback(
    e => {
      if (e.key.startsWith('Arrow')) {
        dispatch(move({ info: readArrowKey(e.key), matrix: saved }));
      } else if (e.keyCode === 32) dispatch(moveStraightDown({ matrix: saved }));
    },
    [dispatch, saved],
  );

  useAutoFall(moveDown, speed);
  const { removeKeyDownListener } = useKeyDown(onKeyDown);

  useEffect(() => {
    dispatch(write(block));

    if (block.settled) {
      dispatch(addScore());
      dispatch(save());
      if (hasToplineTouched) {
        dispatch(gameover());
        removeKeyDownListener();
        return;
      }
      dispatch(next());
    }
  }, [block, dispatch, hasToplineTouched, removeKeyDownListener]);

  return (
    <Flex
      as="section"
      direction="column"
      margin="0 auto"
      alignItems="center"
      position="relative"
      ref={boardSectionRef}
    >
      {hasToplineTouched && (
        <Heading
          position="absolute"
          z-index="999"
          top="50%"
          transform="translate3d(0,-50%,0)"
        >
          GAME OVER
        </Heading>
      )}
      <Matrix matrix={draft} isMainBoard />
    </Flex>
  );
};

export default Board;
