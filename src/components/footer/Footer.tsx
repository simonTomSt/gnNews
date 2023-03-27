import { Layout, Space } from 'antd';
import { FormattedDate, FormattedMessage } from 'react-intl';

import { useSelector } from 'react-redux';

import { selectNewsArticlesTotalCount } from '@/store';
import { useCurrentTime } from '@/utils';
import styles from './footer.module.scss';

export const Footer = () => {
  const currentTime = useCurrentTime();
  const totalNewsCount = useSelector(selectNewsArticlesTotalCount);

  return (
    <Layout.Footer className={styles.footer}>
      <Space>
        <FormattedMessage id="footer.total_news" />
        {totalNewsCount}
      </Space>

      <Space>
        <FormattedMessage id="footer.current_time" />
        <FormattedDate
          value={currentTime}
          hour="numeric"
          minute="numeric"
          second="numeric"
        />
      </Space>
    </Layout.Footer>
  );
};
