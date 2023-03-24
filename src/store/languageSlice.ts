import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getFromLocalStorage, saveToLocalStorage } from '@/utils';
import { languagesMap, LS_LANGUAGE_KEY } from '@/utils/constants';
import { RootState } from './store';

interface LanguageState {
  lang: string;
}

const initialState: LanguageState = {
  lang:
    getFromLocalStorage(LS_LANGUAGE_KEY) ||
    languagesMap.get(navigator.language) ||
    'pl',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      saveToLocalStorage(LS_LANGUAGE_KEY, action.payload);
      state.lang = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;

// Selectors
export const slectLanguage = createSelector(
  (state: RootState) => state.language,
  (language: LanguageState) => language.lang
);
