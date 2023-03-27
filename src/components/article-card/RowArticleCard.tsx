import { Card, Space } from 'antd';
import { FormattedDate, FormattedMessage } from 'react-intl';

import { InfoItem } from '../info-item/InfoItem';
import { ArticleCardProps } from './article-card.types';

export const RowArticleCard = ({ article, onClick }: ArticleCardProps) => {
  const { title, publishedAt, source } = article;

  return (
    <Card
      hoverable
      size="small"
      title={title}
      onClick={() => onClick(article)}
      role="button"
    >
      <Space direction="vertical">
        <InfoItem
          label={<FormattedMessage id={`article.publicationDate`} />}
          value={
            <FormattedDate
              value={publishedAt}
              year="numeric"
              month="long"
              day="numeric"
              weekday="long"
            />
          }
        />
        <InfoItem
          label={<FormattedMessage id="article.source" />}
          value={source.name}
        />
      </Space>
    </Card>
  );
};
