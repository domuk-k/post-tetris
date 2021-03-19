import { createSlice } from '@reduxjs/toolkit';

const initialGame = {
  levelInfo: {
    stage: 1,
    speed: 500,
  },
  score: 0,
  timer: {
    minute: 0,
    second: 0,
  },
};

export const gameSlice = createSlice({
  name: 'game',
  initialState: initialGame,
  reducers: {
    setLevel: (state, action) => {
      const { stage } = action.payload;
      const speedDiff = Math.abs(stage - state.levelInfo.stage);

      state.levelInfo.stage += stage;
      state.speed += state.levelInfo.stage > stage ? -speedDiff : speedDiff;
    },
    addScore: (state, action) => {
      state.score += 100;
    },
    startTimer: state => {},
    stopTimer: state => {},
  },
});

const { actions, reducer } = gameSlice;

export const { setLevel, addScore, startTimer, stopTimer } = actions;

export const selectGame = state => state.game;
export const selectLevelInfo = state => state.game.levelInfo;

export default reducer;
