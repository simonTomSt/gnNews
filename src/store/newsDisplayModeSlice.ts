import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { NewsDisplayMode } from '@/utils/types';
import { RootState } from './store';

interface NewsDisplayState {
  mode: NewsDisplayMode;
}

const initialState: NewsDisplayState = {
  mode: NewsDisplayMode.Tile,
};

const newsDisplayModeSlice = createSlice({
  name: 'newsDisplayMode',
  initialState,
  reducers: {
    setDisplayMode: (state, action: PayloadAction<NewsDisplayMode>) => {
      state.mode = action.payload;
    },
  },
});

export const { setDisplayMode } = newsDisplayModeSlice.actions;

export default newsDisplayModeSlice.reducer;

// Selectors
export const selectDisplayMode = createSelector(
  (state: RootState) => state.newsDisplayMode,
  (newsDisplayMode) => newsDisplayMode.mode
);
