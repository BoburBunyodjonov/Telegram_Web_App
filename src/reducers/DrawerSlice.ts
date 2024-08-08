import { createSlice } from '@reduxjs/toolkit';

interface DrawerState {
  languageOpen: boolean;
  locationOpen: boolean;
}

const initialState: DrawerState = {
  languageOpen: false,
  locationOpen: false,
};

const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    toggleLanguageDrawer(state) {
      state.languageOpen = !state.languageOpen;
    },
    toggleLocationDrawer(state) {
      state.locationOpen = !state.locationOpen;
    },
    closeAllDrawers(state) {
      state.languageOpen = false;
      state.locationOpen = false;
    },
  },
});

export const { toggleLanguageDrawer, toggleLocationDrawer, closeAllDrawers } = drawerSlice.actions;
export default drawerSlice.reducer;


