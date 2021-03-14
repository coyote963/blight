import { configureStore } from '@reduxjs/toolkit';
import leaderboardReducer from '../features/leaderboard/leaderboardSlice'
import { LeaderboardState } from '../features/leaderboard/leaderboardSlice'
export const store = configureStore({
  reducer: {
    leaderboard: leaderboardReducer,
  },
});
export interface ApplicationState{
  leaderboard: LeaderboardState,
}