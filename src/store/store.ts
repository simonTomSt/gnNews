import { configureStore } from '@reduxjs/toolkit';
import newsDisplayModeSliceReducer from './newsDisplayModeSlice';
import languageSliceReducer from './languageSlice';
import newsReducer from './newsSlice';

export const store = configureStore({
  reducer: {
    newsDisplayMode: newsDisplayModeSliceReducer,
    language: languageSliceReducer,
    news: newsReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
