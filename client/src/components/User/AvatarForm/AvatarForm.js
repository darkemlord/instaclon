import React, { useCallback } from 'react';
import './AvatarForm.scss';
import { Button } from 'semantic-ui-react';
import { useDropzone } from 'react-dropzone';

const AvatarForm = (props) => {
  const { setShowModal } = props

  const onDrop = useCallback((acceptedFile) => {
    console.log(acceptedFile)
  }, [])

  const { getRootProps, getInputProps} = useDropzone({
    accept: 'image/jpeg, image/png',
    noKeyboard: true,
    multiple: false,
    onDrop,
  }
  );
  return (
    <div className='avatar-form'>
      <Button {...getRootProps()} >Upload your picture</Button>
      <Button>Delete current picture</Button>
      <Button onClick={() =>  setShowModal(false)}>Cancel</Button>
      <input {...getInputProps()}/>
    </div>
  )
}

export default AvatarForm;
