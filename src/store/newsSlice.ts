import { getGeneralTopNews, getTopNewsByCountryName } from '@/api';
import { Article, TopNewsByCountryNameRespnse } from '@/api/api-models';
import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { RootState } from './store';

type RequestStatus = 'idle' | 'pending' | 'success' | 'fail';

interface NewsState {
  news: TopNewsByCountryNameRespnse;
  requestStatus: RequestStatus;
}

const initialState: NewsState = {
  news: { articles: [] as Article[] },
  requestStatus: 'idle',
} as NewsState;

const newSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTopNewsByCountryNameThunk.fulfilled, (state, action) => {
      state.news = action.payload;
      state.requestStatus = 'success';
    });
    builder.addCase(getTopNewsByCountryNameThunk.pending, (state) => {
      state.requestStatus = 'pending';
    });
    builder.addCase(getTopNewsByCountryNameThunk.rejected, (state) => {
      state.requestStatus = 'fail';
    });
    builder.addCase(getGeneralTopNewsThunk.fulfilled, (state, action) => {
      state.news = action.payload;
      state.requestStatus = 'success';
    });
    builder.addCase(getGeneralTopNewsThunk.pending, (state) => {
      state.requestStatus = 'pending';
    });
    builder.addCase(getGeneralTopNewsThunk.rejected, (state) => {
      state.requestStatus = 'fail';
    });
  },
});

export default newSlice.reducer;

// thnuks
export const getTopNewsByCountryNameThunk = createAsyncThunk(
  'news/getTopNewsByCountryName',
  async (countryName: string, thunkAPI) => {
    try {
      const response = await getTopNewsByCountryName(countryName);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue((error as AxiosError).message);
    }
  }
);

export const getGeneralTopNewsThunk = createAsyncThunk(
  'news/getGeneralTopNews',
  async (_, thunkAPI) => {
    try {
      const response = await getGeneralTopNews();
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue((error as AxiosError).message);
    }
  }
);

//selectors
export const selectNewsArticles = createSelector(
  (state: RootState) => state.news,
  (news: NewsState) => news.news.articles || []
);

export const selectNewsArticlesTotalCount = createSelector(
  (state: RootState) => state.news,
  (news: NewsState) => news.news.articles.length
);

export const selectNewsRequestStatus = createSelector(
  (state: RootState) => state.news,
  (news: NewsState) => news.requestStatus
);
