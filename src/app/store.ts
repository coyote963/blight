import { configureStore } from '@reduxjs/toolkit';
import leaderboardReducer from '../features/leaderboard/leaderboardSlice'
import { LeaderboardState } from '../features/leaderboard/leaderboardSlice'
import  themeReducer  from './ThemeSlice'
import profileReducer, { ProfileState }  from '../features/tdm-profile/TdmProfileSlice'
import { ThemeState } from '../models/ThemeState';
import {loadLocalStorage, saveLocalStorage} from './LocalStorageState'
export const store = configureStore({
  reducer: {
    leaderboard: leaderboardReducer,
    theme: themeReducer,
    profile: profileReducer
  },
  preloadedState : loadLocalStorage()
})
store.subscribe(() => saveLocalStorage(store.getState()))
export interface ApplicationState{
  leaderboard: LeaderboardState,
  theme: ThemeState,
  profile: ProfileState
}
