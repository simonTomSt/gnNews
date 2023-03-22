import { configureStore } from '@reduxjs/toolkit';
import newsDisplayModeSliceReducer from './newsDisplayModeSlice';

export const store = configureStore({
  reducer: {
    newsDisplayMode: newsDisplayModeSliceReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
