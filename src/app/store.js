import { configureStore } from '@reduxjs/toolkit';
import blockReducer from 'feature/block/blockSlice';
import boardReducer from 'feature/board/boardSlice';

const store = configureStore({
  reducer: {
    block: blockReducer,
    board: boardReducer,
  },
});

export default store;
