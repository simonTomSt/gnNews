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
  const appState = { newsDisplayMode: { mode: NewsDisplayMode.Tile } };

  it('should return news display mode from store', () => {
    expect(selectDisplayMode(appState)).toEqual(appState.newsDisplayMode.mode);
  });
});
