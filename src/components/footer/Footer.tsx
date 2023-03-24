import { Layout, Space } from 'antd';
import { FormattedDate, FormattedMessage } from 'react-intl';

import { useCurrentTime } from '@/utils';
import styles from './footer.module.scss';

export const Footer = () => {
  const currentTime = useCurrentTime();

  return (
    <Layout.Footer className={styles.footer}>
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
