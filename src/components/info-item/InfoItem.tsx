import { Typography } from 'antd';
import { ReactNode } from 'react';

import styles from './info-item.module.scss';

type InfoItemProps = {
  label: ReactNode;
  value: ReactNode;
};

export const InfoItem = ({ label, value }: InfoItemProps) => {
  if (!value) return null;

  return (
    <div className={styles.info}>
      <Typography.Text className={styles.info__label}>{label}</Typography.Text>
      <Typography.Text className={styles.info__value}>{value}</Typography.Text>
    </div>
  );
};
