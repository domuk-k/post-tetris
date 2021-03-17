import { createSlice } from '@reduxjs/toolkit';

const initialBlockShape = [
  [1, 1],
  [1, 1],
];

const initialBlock = {
  shape: initialBlockShape,
  position: {
    offsetX: 0,
    offsetY: 0,
  },
};

const blockSlice = createSlice({
  name: 'currentBlock',
  initialState: initialBlock,
  reducers: {
    move: (state, action) => {
      console.log(action);
    },
  },
});

export const { move } = blockSlice.actions;

export const selectBlock = state => state.block;

export default blockSlice.reducer;
