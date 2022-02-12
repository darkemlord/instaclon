import React from 'react';
import './AvatarForm.scss';
import { Button } from 'semantic-ui-react';

const AvatarForm = (props) => {

  const { setShowModal } = props
  return (
    <div className='avatar-form'>
      <Button>Upload your picture</Button>
      <Button>Delete current picture</Button>
      <Button onClick={() =>  setShowModal(false)}>Cancel</Button>
    </div>
  )
}

export default AvatarForm;
