import { defaultStoreState } from '@/utils/testing-utils';
import languageReducer, { setLanguage, slectLanguage } from '../languageSlice';

describe('languageSlice', () => {
  const initialState = { lang: 'pl' };

  it('should handle initial state', () => {
    expect(languageReducer(undefined, { type: 'unknown' })).toEqual(
      initialState
    );
  });

  it('should handle setLanguage', () => {
    const actual = languageReducer(initialState, setLanguage('en'));
    expect(actual.lang).toEqual('en');
  });
});

describe('selectDisplayMode selector', () => {
  it('should return news display mode from store', () => {
    expect(slectLanguage(defaultStoreState)).toEqual(
      defaultStoreState.language.lang
    );
  });
});
