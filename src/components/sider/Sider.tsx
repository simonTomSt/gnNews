import { Link } from 'react-router-dom';
import { Grid, Layout, Menu, MenuProps, Space } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons';

import { RoutesPaths } from '@/utils';
import { supportedCountries } from '@/utils/constants';
import { CountryName } from '../country-name/CountryName';
import { MyThoughts } from '../header/MyThoughts';
import { LanguageSelect } from '../language-select/LanguageSelect';
import styles from './sider.module.scss';

const items: MenuProps['items'] = supportedCountries.map((country) => ({
  label: (
    <Link to={`${RoutesPaths.Country}/${country}`}>
      <CountryName country={country} />
    </Link>
  ),
  key: country,
}));

const { useBreakpoint } = Grid;

export const Sider = () => {
  const { md } = useBreakpoint();

  return (
    <>
      <Layout.Sider
        breakpoint="lg"
        collapsedWidth="0"
        className={styles.sider}
        trigger={<MenuFoldOutlined />}
      >
        <Menu theme="dark" className={styles.sider__menu} items={items} />
        {!md && (
          <div className={styles['additional-actions']}>
            <Space direction="vertical">
              <MyThoughts />
              <div className={styles['additional-actions__select']}>
                <LanguageSelect dropdownAlign={{ offset: [0, -100] }} />
              </div>
            </Space>
          </div>
        )}
      </Layout.Sider>
    </>
  );
};
