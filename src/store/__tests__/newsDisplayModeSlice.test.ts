import { defaultStoreState } from '@/utils/testing-utils';
import { NewsDisplayMode } from '@/utils/types';
import newsDisplayModeReducer, {
  selectDisplayMode,
  setDisplayMode,
} from '../newsDisplayModeSlice';

describe('newsDisplayModeSlice', () => {
  const initialState = { mode: NewsDisplayMode.Tile };

  it('should handle initial state', () => {
    expect(newsDisplayModeReducer(undefined, { type: 'unknown' })).toEqual(
      initialState
    );
  });

  it('should handle setDisplayMode', () => {
    const actual = newsDisplayModeReducer(
      initialState,
      setDisplayMode(NewsDisplayMode.Row)
    );
    expect(actual.mode).toEqual(NewsDisplayMode.Row);
  });
});

describe('selectDisplayMode selector', () => {
  it('should return news display mode from store', () => {
    expect(selectDisplayMode(defaultStoreState)).toEqual(
      defaultStoreState.newsDisplayMode.mode
    );
  });
});
