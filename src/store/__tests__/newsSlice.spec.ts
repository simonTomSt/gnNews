import { AnyAction } from '@reduxjs/toolkit';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { getTopNewsByCountryName, getGeneralTopNews } from '@/api';
import newsReducer, {
  getGeneralTopNewsThunk,
  getTopNewsByCountryNameThunk,
  selectNewsArticles,
  selectNewsArticlesTotalCount,
  selectNewsRequestStatus,
} from '../newsSlice';
import { RootState } from '../store';

jest.mock('../../api');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('newsSlice', () => {
  describe('reducer', () => {
    it('should have the initial state', () => {
      expect(newsReducer(undefined, { type: 'unknown' })).toEqual({
        news: { articles: [] },
        requestStatus: 'idle',
      });
    });

    it('should handle getTopNewsByCountryNameThunk.fulfilled', () => {
      const payload = {
        articles: [{ title: 'Article 1' }],
      };
      const action = {
        type: getTopNewsByCountryNameThunk.fulfilled.type,
        payload,
      };

      const state = newsReducer(undefined, action as AnyAction);

      expect(state.news.articles).toEqual(payload.articles);
      expect(state.requestStatus).toEqual('success');
    });

    it('should handle getTopNewsByCountryNameThunk.pending', () => {
      const action = {
        type: getTopNewsByCountryNameThunk.pending.type,
      };

      const state = newsReducer(undefined, action as AnyAction);

      expect(state.requestStatus).toEqual('pending');
    });

    it('should handle getTopNewsByCountryNameThunk.rejected', () => {
      const action = {
        type: getTopNewsByCountryNameThunk.rejected.type,
      };

      const state = newsReducer(undefined, action as AnyAction);

      expect(state.requestStatus).toEqual('fail');
    });

    it('should handle getGeneralTopNewsThunk.fulfilled', () => {
      const payload = {
        articles: [{ title: 'Article 1' }],
      };
      const action = {
        type: getGeneralTopNewsThunk.fulfilled.type,
        payload,
      };

      const state = newsReducer(undefined, action as AnyAction);

      expect(state.news.articles).toEqual(payload.articles);
      expect(state.requestStatus).toEqual('success');
    });

    it('should handle getGeneralTopNewsThunk.pending', () => {
      const action = {
        type: getGeneralTopNewsThunk.pending.type,
      };

      const state = newsReducer(undefined, action as AnyAction);

      expect(state.requestStatus).toEqual('pending');
    });

    it('should handle getGeneralTopNewsThunk.rejected', () => {
      const action = {
        type: getGeneralTopNewsThunk.rejected.type,
      };

      const state = newsReducer(undefined, action as AnyAction);

      expect(state.requestStatus).toEqual('fail');
    });
  });

  describe('selectors', () => {
    const testState = {
      news: {
        news: { articles: [{ title: 'Test article' }] },
        requestStatus: 'success',
      },
    };

    it('selectNewsArticles should return the news articles', () => {
      const expectedValue = [{ title: 'Test article' }];
      const result = selectNewsArticles(testState as RootState);

      expect(result).toEqual(expectedValue);
    });

    it('selectNewsArticles should return an empty array if there are no news articles', () => {
      const state = { news: { news: { articles: [] } } };
      const expectedValue: any[] = [];
      const result = selectNewsArticles(state as unknown as RootState);

      expect(result).toEqual(expectedValue);
    });

    it('selectNewsArticlesTotalCount should return the total count of news articles', () => {
      const expectedValue = 1;
      const result = selectNewsArticlesTotalCount(testState as RootState);

      expect(result).toEqual(expectedValue);
    });

    it('selectNewsArticlesTotalCount should return 0 if there are no news articles', () => {
      const state = { news: { news: { articles: [] } } };
      const expectedValue = 0;
      const result = selectNewsArticlesTotalCount(
        state as unknown as RootState
      );

      expect(result).toEqual(expectedValue);
    });

    it('selectNewsRequestStatus should return the request status', () => {
      const expectedValue = 'success';
      const result = selectNewsRequestStatus(testState as RootState);

      expect(result).toEqual(expectedValue);
    });
  });

  describe('thunks', () => {
    describe('getTopNewsByCountryNameThunk', () => {
      it('dispatches the correct actions on successful API call', async () => {
        const store = mockStore({});
        const mockedResponse = { data: [{ title: 'Mocked article title' }] };
        (getTopNewsByCountryName as jest.Mock).mockResolvedValue(
          mockedResponse
        );

        await store.dispatch(getTopNewsByCountryNameThunk('USA') as any);
        const actions = store.getActions();
        expect(actions[0].type).toEqual('news/getTopNewsByCountryName/pending');
        expect(actions[1].type).toEqual(
          'news/getTopNewsByCountryName/fulfilled'
        );
        expect(actions[1].payload).toEqual(mockedResponse.data);
      });

      it('dispatches the correct actions on API call failure', async () => {
        const store = mockStore({});
        const mockedError = { message: 'Mocked error message' };
        (getTopNewsByCountryName as jest.Mock).mockRejectedValue(mockedError);

        await store.dispatch(getTopNewsByCountryNameThunk('USA') as any);
        const actions = store.getActions();
        expect(actions[0].type).toEqual('news/getTopNewsByCountryName/pending');
        expect(actions[1].type).toEqual(
          'news/getTopNewsByCountryName/rejected'
        );
        expect(actions[1].payload).toEqual(mockedError.message);
      });
    });

    describe('getGeneralTopNewsThunk', () => {
      it('dispatches the correct actions on successful API call', async () => {
        const store = mockStore({});
        const mockedResponse = { data: [{ title: 'Mocked article title' }] };
        (getGeneralTopNews as jest.Mock).mockResolvedValue(mockedResponse);

        await store.dispatch(getGeneralTopNewsThunk() as any);
        const actions = store.getActions();
        expect(actions[0].type).toEqual('news/getGeneralTopNews/pending');
        expect(actions[1].type).toEqual('news/getGeneralTopNews/fulfilled');
        expect(actions[1].payload).toEqual(mockedResponse.data);
      });

      it('dispatches the correct actions on API call failure', async () => {
        const store = mockStore({});
        const mockedError = { message: 'Mocked error message' };
        (getGeneralTopNews as jest.Mock).mockRejectedValue(mockedError);

        await store.dispatch(getGeneralTopNewsThunk() as any);
        const actions = store.getActions();
        expect(actions[0].type).toEqual('news/getGeneralTopNews/pending');
        expect(actions[1].type).toEqual('news/getGeneralTopNews/rejected');
        expect(actions[1].payload).toEqual(mockedError.message);
      });
    });
  });
});
