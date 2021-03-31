import {
    createAction,
    createSlice,
} from '@reduxjs/toolkit'
import { ThemeState, Theme } from '../models/ThemeState'
import { ApplicationState } from './store';

const initialState: ThemeState = {
    theme: Theme.LIGHT 
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers : {
        toggleTheme: (state: ThemeState) => {
            if (state.theme === Theme.LIGHT) {
                state.theme = Theme.DARK
            } else {
                state.theme = Theme.LIGHT
            }
        },
    } 
});

export const { toggleTheme } = themeSlice.actions;
export const initialLoadTheme = createAction('theme/initialload')
export const themeSelector = (state: ApplicationState) => state.theme.theme
export default themeSlice.reducer