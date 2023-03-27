import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { RoutesPaths } from '@/utils';

export const NotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle={<FormattedMessage id="notFound.message" />}
      extra={
        <Link to={RoutesPaths.Home}>
          <Button type="primary">
            <FormattedMessage id="backButton" />
          </Button>
        </Link>
      }
    />
  );
};
