import { Article } from '@/api/api-models';

export type ArticleCardProps = {
  article: Article;
  onClick: (article: Article) => void;
};
