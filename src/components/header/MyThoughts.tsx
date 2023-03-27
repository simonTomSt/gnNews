import { useState } from 'react';
import { Button, Modal, Typography } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { FormattedMessage } from 'react-intl';

export const MyThoughts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        type="link"
        size="large"
        onClick={showModal}
        icon={<InfoCircleOutlined />}
      >
        <span>
          <FormattedMessage id={`my_thoughts.open_modal_button`} />
        </span>
      </Button>

      <Modal
        open={isModalOpen}
        footer={[]}
        onOk={closeModal}
        onCancel={closeModal}
      >
        <Typography.Paragraph style={{ paddingRight: 20 }}>
          <FormattedMessage id="my_thoughts.desc" />
        </Typography.Paragraph>
      </Modal>
    </>
  );
};
