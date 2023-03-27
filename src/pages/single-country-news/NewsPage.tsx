import { LoaderFunction } from 'react-router';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import {
  store,
  getTopNewsByCountryNameThunk,
  getGeneralTopNewsThunk,
  selectDisplayMode,
  selectNewsRequestStatus,
  selectNewsArticles,
} from '@/store';
import { NewsDisplayMode } from '@/utils/types';
import Article from './Article';
import styles from './news-page.module.scss';
import { StatusWrapper } from '@/components';

export const NewsPage = () => {
  const displayMode = useSelector(selectDisplayMode);
  const newsRequestStatus = useSelector(selectNewsRequestStatus);
  const articles = useSelector(selectNewsArticles);

  return (
    <StatusWrapper
      isLoading={newsRequestStatus === 'pending'}
      noData={newsRequestStatus === 'success' && !articles.length}
    >
      <section
        className={clsx(
          styles.news,
          displayMode === NewsDisplayMode.Row && styles['news--row']
        )}
      >
        {articles.map((article) => (
          <Article
            key={article.url}
            article={article}
            displayMode={displayMode}
          />
        ))}
      </section>
    </StatusWrapper>
  );
};

export const singleCountryNewsLoader: LoaderFunction = async ({ params }) => {
  const { countryName } = params;

  if (!countryName) {
    await store.dispatch(getGeneralTopNewsThunk());
  } else {
    await store.dispatch(getTopNewsByCountryNameThunk(countryName || ''));
  }

  const requestStatus = store.getState().news.requestStatus;
  if (requestStatus === 'fail') {
    throw Error();
  }

  return requestStatus;
};
