import React from 'react';
import './AvatarForm.scss';
import { Button } from 'semantic-ui-react';

const AvatarForm = () => {
  return (
    <div className='avatar-form'>
      <Button>Upload your picture</Button>
      <Button>Delete current picture</Button>
      <Button>Cancel</Button>
    </div>
  )
}

export default AvatarForm;
