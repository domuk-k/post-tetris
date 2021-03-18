import { createSlice, createAction } from '@reduxjs/toolkit';
import { getNextColor } from 'utils';
import { boardSlice } from 'feature/board/boardSlice';

const initialBlockShape = [
  [1, 1],
  [1, 1],
];

const initialBlock = {
  shape: initialBlockShape,
  position: {
    offsetX: 4,
    offsetY: 0,
  },
  get width() {
    return Math.max(...this.shape.map(row => row.length));
  },
  get height() {
    return this.shape.length;
  },
  color: getNextColor(),
  settled: false,
};

export const blockSlice = createSlice({
  name: 'current-block',
  initialState: initialBlock,
  reducers: {
    next: (state, action) => {
      state.position = initialBlock.position;
      state.color = getNextColor();
      state.settled = false;
    },
    move: (state, action) => {
      const { info, matrix } = action.payload;
      const { axis, direction } = info;

      if (!isValidMovement(state, axis, direction, matrix)) {
        if (axis === 'Y') {
          state.settled = true;
        }
        return;
      }

      state.position['offset' + axis] = state.position['offset' + axis] + direction;
    },
  },
});

const isValidMovement = (block, axis, direction, matrix) => {
  const { width, height, position } = block;

  const targetX = position.offsetX + (direction < 0 ? direction : width);
  const targetY = position.offsetY + (direction < 0 ? direction : height);

  const destinationCells =
    axis === 'X'
      ? matrix.slice(position.offsetY, position.offsetY + height).map(row => row[targetX])
      : (matrix[targetY] || []).slice(position.offsetX, position.offsetX + 2);

  if (
    destinationCells.length < width ||
    destinationCells.some(cell => cell === undefined || cell.isFilled)
  ) {
    return false;
  }

  return true;
};

export const { move, next } = blockSlice.actions;

export const selectBlock = state => state.block;

export default blockSlice.reducer;
