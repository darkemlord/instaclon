import React from 'react';
import './ModalBasic.scss';
import { Modal } from 'semantic-ui-react';

const ModalBasic = (props) => {
  const { show, setShow, title, children } = props;

  const onClose = () => {
    setShow(false)
  }

  return (

    <div className='modal-container'>
      <Modal size="mini" open={show} onClose={onClose} className="modal-basic">
        {title && <Modal.Header>{title}</Modal.Header>}
        {children}
      </Modal>
    </div>
  );
}

export default ModalBasic;
