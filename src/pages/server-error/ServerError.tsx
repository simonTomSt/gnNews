import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { RoutesPaths } from '../../utils/routes-paths';

type ServerErrorProps = {
  withBackButton?: boolean;
};

export const ServerError = ({ withBackButton }: ServerErrorProps) => {
  return (
    <Result
      status="500"
      title="500"
      subTitle={<FormattedMessage id="serverError.message" />}
      extra={
        withBackButton && (
          <Link to={RoutesPaths.Home}>
            <Button type="primary">
              <FormattedMessage id="backButton" />
            </Button>
          </Link>
        )
      }
    />
  );
};
