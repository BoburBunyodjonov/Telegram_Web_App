// reducers/SearchSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  query: string;
  history: string[];
}

const initialState: SearchState = {
  query: '',
  history: JSON.parse(localStorage.getItem('searchHistory') || '[]'),
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    addSearchHistory(state, action: PayloadAction<string>) {
      if (!state.history.includes(action.payload)) {
        state.history.push(action.payload);
        localStorage.setItem('searchHistory', JSON.stringify(state.history));
      }
    },
    removeSearchHistory(state, action: PayloadAction<string>) {
      state.history = state.history.filter((query) => query !== action.payload);
      localStorage.setItem('searchHistory', JSON.stringify(state.history));
    },
    clearSearchHistory(state) {
      state.history = [];
    },
  },
});

export const { setSearchQuery, addSearchHistory, removeSearchHistory } = searchSlice.actions;
export default searchSlice.reducer;
