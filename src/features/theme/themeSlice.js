import { createSlice } from '@reduxjs/toolkit';

// Light (white) is the default; a saved choice wins.
const readSavedTheme = () => {
  try {
    return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
  } catch {
    return 'light';
  }
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: { mode: readSavedTheme() },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export const selectThemeMode = (state) => state.theme.mode;
export default themeSlice.reducer;
