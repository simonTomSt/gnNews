import { configureStore } from '@reduxjs/toolkit';
import newsDisplayModeSliceReducer from './newsDisplayModeSlice';
import languageSliceReducer from './languageSlice';

export const store = configureStore({
  reducer: {
    newsDisplayMode: newsDisplayModeSliceReducer,
    language: languageSliceReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
