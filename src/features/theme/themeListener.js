import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { setTheme, toggleTheme } from './themeSlice';

// Applies the theme to <html> and persists it whenever it changes.
export const themeListener = createListenerMiddleware();

themeListener.startListening({
  matcher: isAnyOf(toggleTheme, setTheme),
  effect: (_action, api) => {
    const { mode } = api.getState().theme;
    document.documentElement.classList.toggle('dark', mode === 'dark');
    try {
      localStorage.setItem('theme', mode);
    } catch {
      /* storage unavailable (private mode) — theme still applies for this visit */
    }
  },
});
