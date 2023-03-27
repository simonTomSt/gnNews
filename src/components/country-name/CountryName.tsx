import { Space } from 'antd';
import { FormattedMessage } from 'react-intl';

type Sizes = '16' | '24' | '32' | '48' | '64';

type CountryNameProps = {
  country: string;
  size?: Sizes;
};

export const CountryName = ({ country, size = '16' }: CountryNameProps) => {
  const imgSrc = `${
    process.env.FLAGS_URL
  }/${country.toUpperCase()}/flat/${size}.png`;

  return (
    <div>
      <Space size="small">
        <img src={imgSrc} alt={country} />
        <FormattedMessage id={`countries.${country}`} />
      </Space>
    </div>
  );
};
