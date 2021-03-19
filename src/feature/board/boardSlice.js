import { createSlice } from '@reduxjs/toolkit';
import { MATRIX_SIZE, range, createCell, createTwoDimensionArray } from 'utils';

const initialMatrix = createTwoDimensionArray({
  width: MATRIX_SIZE.WIDTH,
  height: MATRIX_SIZE.HEIGHT,
});

const boardSlice = createSlice({
  name: 'board',
  initialState: {
    saved: [...initialMatrix],
    draft: [...initialMatrix],
    hasToplineTouched: false,
  },
  reducers: {
    save: state => {
      state.saved = state.draft;

      if (state.draft[0].some(cell => cell.isFilled)) {
        state.hasToplineTouched = true;
        return;
      }

      const clearedLineIndecies = state.saved.reduce(
        (acc, cur, rowIndex) =>
          cur.every(cell => cell.isFilled) ? [...acc, rowIndex] : acc,
        [],
      );

      if (clearedLineIndecies.length) {
        state.saved = state.saved.filter(
          (_, rowIndex) => !clearedLineIndecies.includes(rowIndex),
        );
        for (let i = 0; i < clearedLineIndecies.length; i++) {
          state.saved.unshift(
            Array.from({ length: MATRIX_SIZE.WIDTH }, (_, colIndex) =>
              createCell({ x: i, y: colIndex }),
            ),
          );
        }
      }
    },
    write: (state, action) => {
      const { position, width, height, color } = action.payload;
      const { offsetX, offsetY } = position;

      const isTargetRangeX = index => range(offsetX, offsetX + width).includes(index);
      const isTargetRangeY = index => range(offsetY, offsetY + height).includes(index);

      state.draft = state.saved.map((row, rowIndex) => {
        if (isTargetRangeY(rowIndex)) {
          row = row.map((cell, colIndex) =>
            isTargetRangeX(colIndex)
              ? createCell({
                  position: { x: rowIndex, y: colIndex },
                  isFilled: true,
                  color,
                })
              : cell,
          );
        }
        return row;
      });
    },
    gameover: state => {
      state.draft = initialMatrix;
    },
  },
});

const { actions, reducer } = boardSlice;

export const selectBoard = state => state.board;

export const { save, write, gameover } = actions;

export default reducer;
