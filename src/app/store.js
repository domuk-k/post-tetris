import { configureStore } from '@reduxjs/toolkit';
import blockReducer from 'feature/block/blockSlice';
import boardReducer from 'feature/board/boardSlice';
import gameReducer from 'feature/game/gameSlice';

const store = configureStore({
  reducer: {
    block: blockReducer,
    board: boardReducer,
    game: gameReducer,
  },
});

export default store;
