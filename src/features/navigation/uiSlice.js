import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { menuOpen: false, activeSection: '' },
  reducers: {
    toggleMenu: (state) => {
      state.menuOpen = !state.menuOpen;
    },
    closeMenu: (state) => {
      state.menuOpen = false;
    },
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
  },
});

export const { toggleMenu, closeMenu, setActiveSection } = uiSlice.actions;
export const selectMenuOpen = (state) => state.ui.menuOpen;
export const selectActiveSection = (state) => state.ui.activeSection;
export default uiSlice.reducer;
