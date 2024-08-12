import { createSlice } from '@reduxjs/toolkit';

interface DrawerState {
  languageOpen: boolean;
  locationOpen: boolean;
  priceSortOpen: boolean;
  sortOpen: boolean;
  productOpen: boolean;
}

const initialState: DrawerState = {
  languageOpen: false,
  locationOpen: false,
  priceSortOpen: false,
  sortOpen: false,
  productOpen: false,
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
    togglePriceSortDrawer(state) {
      state.priceSortOpen = !state.priceSortOpen;
    },
    toggleSortDrawer(state) {
      state.sortOpen = !state.sortOpen;
    },
    toggleProductDrawer(state) {
      state.productOpen = !state.productOpen;
    },
    closeAllDrawers(state) {
      state.languageOpen = false;
      state.locationOpen = false;
      state.priceSortOpen = false;
      state.sortOpen = false;
      state.productOpen = false;
    },
  },
});

export const { toggleLanguageDrawer, toggleLocationDrawer, togglePriceSortDrawer, toggleSortDrawer, toggleProductDrawer, closeAllDrawers } = drawerSlice.actions;
export default drawerSlice.reducer;


