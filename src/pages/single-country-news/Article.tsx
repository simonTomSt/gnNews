import { Article as ArticleType } from '@/api/api-models';
import { TileArticleCard, RowArticleCard, ArticleModal } from '@/components';
import { InfoItem } from '@/components/info-item/InfoItem';
import { NewsDisplayMode } from '@/utils/types';
import { Modal, Space, Typography } from 'antd';
import { useCallback, useState } from 'react';
import { FormattedDate, FormattedMessage } from 'react-intl';

type ArticleProps = {
  displayMode: NewsDisplayMode;
  article: ArticleType;
};

export const Article = ({ displayMode, article }: ArticleProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {displayMode === NewsDisplayMode.Row ? (
        <RowArticleCard article={article} onClick={showModal} />
      ) : (
        <TileArticleCard article={article} onClick={showModal} />
      )}

      <ArticleModal
        article={article}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </>
  );
};

export default Article;
