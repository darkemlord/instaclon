import React, { useCallback } from 'react';
import './AvatarForm.scss';
import { Button } from 'semantic-ui-react';
import { useDropzone } from 'react-dropzone';
import { useMutation } from '@apollo/client';
import { UPDATE_AVATAR} from '../../../gql/user';

const AvatarForm = (props) => {
  const { setShowModal } = props

  const [updateAvatar] = useMutation(UPDATE_AVATAR);

  const onDrop = useCallback( async (acceptedFile) => {
    const file = acceptedFile[0];
    try {
      const result = await updateAvatar({ variables : { file }})
      console.log(result)
    } catch(err) {
      console.log(err)
    }
  }, [updateAvatar])

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
