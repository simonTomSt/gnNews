import { Radio, type RadioChangeEvent } from 'antd';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import { selectDisplayMode, setDisplayMode } from '@/store';
import { NewsDisplayMode } from '@/utils/types';
import styles from './view-toggle.module.scss';

export const ViewModeToggle = () => {
  const dispatch = useDispatch();
  const displayMode = useSelector(selectDisplayMode);

  const handleDisplayModeChange = (e: RadioChangeEvent) => {
    dispatch(setDisplayMode(e.target.value));
  };

  return (
    <>
      <Radio.Group
        defaultValue={displayMode}
        size="large"
        buttonStyle="solid"
        onChange={handleDisplayModeChange}
        className={styles.toggle}
      >
        <Radio.Button value={NewsDisplayMode.Tile}>
          <AppstoreOutlined className={styles.toggle__icon} />
        </Radio.Button>
        <Radio.Button value={NewsDisplayMode.Row}>
          <BarsOutlined className={styles.toggle__icon} />
        </Radio.Button>
      </Radio.Group>
    </>
  );
};
