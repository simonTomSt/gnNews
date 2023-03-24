import { useState } from 'react';
import { Button, Modal } from 'antd';
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
        onClick={showModal}
        icon={<InfoCircleOutlined />}
        size="large"
      >
        <span>
          <FormattedMessage id="my_thoughts.open_modal_button" />
        </span>
      </Button>

      <Modal
        title={<FormattedMessage id="my_thoughts.open_modal_button" />}
        open={isModalOpen}
        onOk={closeModal}
        onCancel={closeModal}
      >
        <FormattedMessage id="my_thoughts.open_modal_button" />
      </Modal>
    </>
  );
};
