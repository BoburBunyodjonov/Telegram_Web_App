// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers/CartSlice';
import searchReducer from '../reducers/SearchSlice';
import sizeReducer from '../reducers/SizeSlice';
import languageReducer from '../reducers/LanguageSlice';
import drawerReducer from '../reducers/DrawerSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
    size: sizeReducer,
    language: languageReducer,
    drawer: drawerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
