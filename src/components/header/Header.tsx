import { Col, Layout, Row, Grid } from 'antd';

import { Logo } from '../logo/Logo';
import { ViewModeToggle } from '../view-toggle/ViewModeToggle';
import { LanguageSelect } from '../language-select/LanguageSelect';
import { MyThoughts } from './MyThoughts';
import styles from './header.module.scss';

const { useBreakpoint } = Grid;

export const Header = () => {
  const { md } = useBreakpoint();

  return (
    <Layout.Header className={styles.header}>
      <Row>
        <Logo />
      </Row>
      <Row justify={md ? 'center' : 'end'}>
        <ViewModeToggle />
      </Row>
      {md && (
        <Row justify="end">
          <Col span={5} className={styles['header__end-col']}>
            <MyThoughts />
            <LanguageSelect />
          </Col>
        </Row>
      )}
    </Layout.Header>
  );
};
