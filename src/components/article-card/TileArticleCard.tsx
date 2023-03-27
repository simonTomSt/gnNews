import { Card, Space, Typography } from 'antd';
import { FormattedDate, FormattedMessage } from 'react-intl';

import { InfoItem } from '../info-item/InfoItem';
import { ArticleCardProps } from './article-card.types';

const { Paragraph } = Typography;

export const TileArticleCard = ({ article, onClick }: ArticleCardProps) => {
  const { urlToImage, title, publishedAt, source, description } = article;

  return (
    <Card
      hoverable
      role="button"
      cover={urlToImage && <img src={urlToImage} alt={title} />}
      onClick={() => onClick(article)}
    >
      <Card.Meta
        title={title}
        description={
          <Paragraph
            ellipsis={{
              rows: 2,
            }}
          >
            {description}
          </Paragraph>
        }
      />
      <Space direction="vertical" size="small">
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
