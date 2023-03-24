import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { setLanguage, slectLanguage } from '@/store';
import { languagesMap } from '@/utils/constants';
import styles from './language-select.module.scss';

export const LanguageSelect = () => {
  const dispatch = useDispatch();
  const currentLangage = useSelector(slectLanguage);
  const options = Array.from(languagesMap.values()).map((lang) => ({
    value: lang,
    label: lang,
  }));

  const handleLanguageChange = (value: string) => {
    dispatch(setLanguage(value));
  };

  return (
    <Select
      className={styles.select}
      popupClassName={styles.select__popup}
      size="small"
      defaultValue={currentLangage}
      onChange={handleLanguageChange}
      options={options}
    />
  );
};
