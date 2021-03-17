import { configureStore } from '@reduxjs/toolkit';
import boardReducer from 'feature/board/boardSlice';
import blockReducer from 'feature/block/blockSlice';

const store = configureStore({
  reducer: {
    board: boardReducer,
    block: blockReducer,
  },
});

export default store;
