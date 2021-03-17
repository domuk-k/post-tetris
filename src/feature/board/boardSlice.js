import { createSlice } from '@reduxjs/toolkit';
import { MATRIX_SIZE } from 'utils/constants';

const initialMatrix = Array.from({ length: MATRIX_SIZE.HEIGHT }, _ =>
  Array.from({ length: MATRIX_SIZE.WIDTH }),
);

const boardSlice = createSlice({
  name: 'board',
  initialState: {
    saved: [...initialMatrix],
    draft: [...initialMatrix],
  },
  reducers: {
    save: (state, action) => {
      console.log(action);
    },
    edit: (state, action) => {
      console.log(action);
    },
  },
});

export const { save, edit } = boardSlice.actions;

export const selectBoard = state => state.board;

export default boardSlice.reducer;
