import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Theme } from '../models/ThemeState';
import {  themeSelector, toggleTheme } from './ThemeSlice';
export const ThemeButton = () => {
    const dispatch = useDispatch();
    const theme = useSelector(themeSelector)
    

    return (
    <button
        onClick={() => dispatch(toggleTheme())}>
        [{ (theme === Theme.DARK) ? '☀️' : '🌙'}]
     </button>)
}