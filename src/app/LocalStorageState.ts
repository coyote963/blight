import { Theme } from "../models/ThemeState";
import { ApplicationState } from "./store";

export function loadLocalStorage() {
    if (localStorage.getItem("theme") === 'dark' || (!(localStorage.getItem('theme')) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        return {
            theme: {
            theme: Theme.DARK
          }}
      } else {
        document.documentElement.classList.remove('dark')
        return {
            theme: {
            theme: Theme.LIGHT
          }}
      }
}

export function saveLocalStorage(state: ApplicationState) {
    if (state.theme.theme === Theme.DARK){
        document.documentElement.classList.add('dark')
        localStorage.setItem("theme", "dark")

    } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem("theme", "light")
    }
}