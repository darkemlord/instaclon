import React from 'react';
import { Button } from 'semantic-ui-react';
import './SettingsForm.scss';

const SettingsForm = (props) => {
  const {setShowModal} = props;
  return (
    <div className='settings-form'>
      < Button>Change password</Button>
      < Button>Change email</Button>
      < Button>Change description</Button>
      < Button>Change website</Button>
      < Button>Log Out</Button>
      <Button onClick={() => { setShowModal(false)}}>Cancel</Button>
    </div>
  )
}

export default SettingsForm;
