import { Modal, Typography, Space, ModalProps, Image } from 'antd';
import { FormattedMessage, FormattedDate } from 'react-intl';

import { Article } from '@/api/api-models';
import { InfoItem } from '../info-item/InfoItem';
import styles from './article-modal.module.scss';

type ArticleModalProps = ModalProps & { article: Article };

export const ArticleModal = ({ article, ...modalProps }: ArticleModalProps) => {
  const {
    urlToImage,
    title,
    publishedAt,
    source,
    description,
    author,
    url,
    content,
  } = article;

  return (
    <Modal
      centered
      footer={[
        url && (
          <Typography.Link href={url} target="_blank" rel="noopener noreferrer">
            <FormattedMessage id={`article.viewMore`} />
          </Typography.Link>
        ),
      ]}
      {...modalProps}
    >
      <Typography.Title level={4} className={styles.modal__title}>
        {title}
      </Typography.Title>

      <Space direction="vertical" size="large">
        {urlToImage && (
          <Image src={urlToImage} alt={title} preview={false} width="100%" />
        )}

        <Typography.Paragraph>{description}</Typography.Paragraph>

        <Typography.Paragraph>{content}</Typography.Paragraph>
      </Space>

      <Space direction="vertical">
        <InfoItem
          label={<FormattedMessage id={`article.author`} />}
          value={author}
        />
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
          label={<FormattedMessage id={`article.source`} />}
          value={source.name}
        />
      </Space>
    </Modal>
  );
};
