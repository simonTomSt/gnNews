import { Outlet } from 'react-router';
import { Layout } from 'antd';

import { Header, Sider } from '@/components';
import { Footer } from '@/components/footer/Footer';

const { Content } = Layout;

export const RootLayout = () => (
  <Layout>
    <Header />
    <Sider />
    <Layout>
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  </Layout>
);
