import { ThemeConfig } from 'antd';
import { generate } from '@ant-design/colors';

const color = generate('#19A7CE');

export const theme: ThemeConfig = {
  token: {
    colorPrimary: '#19A7CE',
    colorLink: '#19A7CE',
    colorLinkHover: color[4],
    colorLinkActive: color[3],
  },
};
