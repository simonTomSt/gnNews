import { Col, Layout, Row } from 'antd';

import { Logo } from '../logo/Logo';
import { ViewModeToggle } from '../view-toggle/ViewModeToggle';
import { LanguageSelect } from '../language-select/LanguageSelect';
import { MyThoughts } from './MyThoughts';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <Layout.Header className={styles.header}>
      <Row>
        <Col span={12}>
          <Logo />
        </Col>
        <Col span={7}>
          <ViewModeToggle />
        </Col>
        <Col span={5} className={styles['header__end-col']}>
          <MyThoughts />
          <LanguageSelect />
        </Col>
      </Row>
    </Layout.Header>
  );
};
