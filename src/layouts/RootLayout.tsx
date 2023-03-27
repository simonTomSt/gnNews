import { Outlet } from 'react-router';
import { ScrollRestoration } from 'react-router-dom';
import { Layout } from 'antd';

import { Header, Sider, Footer } from '@/components';
import styles from './root-layout.module.scss';

const { Content } = Layout;

export const RootLayout = () => (
  <>
    <Layout>
      <Header />
      <Layout hasSider>
        <Sider />
        <Layout className={styles['site-layout']}>
          <Content className={styles.content}>
            <Outlet />
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </Layout>
    <ScrollRestoration />
  </>
);
