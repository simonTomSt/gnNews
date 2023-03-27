import { Empty, Spin } from 'antd';
import { FormattedMessage } from 'react-intl';

type SpinnerWrapperProps = {
  children: JSX.Element;
  isLoading: boolean;
  noData: boolean;
};

export const StatusWrapper = ({
  children,
  isLoading,
  noData,
}: SpinnerWrapperProps) => {
  if (isLoading) return <Spin>{children}</Spin>;

  if (noData)
    return (
      <Empty
        description={
          <span>
            <FormattedMessage id={`empty.message`} />
          </span>
        }
      />
    );

  return children;
};
