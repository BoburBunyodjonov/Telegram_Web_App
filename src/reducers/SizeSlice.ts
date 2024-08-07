import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

interface SizeState {
  selectedSize: number | null;
}

const initialState: SizeState = {
  selectedSize: null,
};

const sizeSlice = createSlice({
  name: 'size',
  initialState,
  reducers: {
    setSelectedSize(state, action: PayloadAction<number>) {
      state.selectedSize = action.payload;
    },
  },
});

export const { setSelectedSize } = sizeSlice.actions;

export const selectSelectedSize = (state: RootState) => state.size.selectedSize;

export default sizeSlice.reducer;
