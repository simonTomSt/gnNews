import { Typography } from 'antd';
import { Link } from 'react-router-dom';

import { RoutesPaths } from '@/utils';
import styles from './logo.module.scss';

export const Logo = () => {
  return (
    <Link to={RoutesPaths.Home} className={styles.logo}>
      <span>gn</span>News
    </Link>
  );
};
