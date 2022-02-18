import React from 'react';
import { Button } from 'semantic-ui-react';
import './SettingsForm.scss';
import { useApolloClient } from '@apollo/client'
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

const SettingsForm = (props) => {
  const {setShowModal} = props;
  const history = useHistory();
  const client = useApolloClient();
  const { logout } = useAuth();

  const onLogout = () => {
    client.clearStore();
    logout();
    history.push('/')
  }

  return (
    <div className='settings-form'>
      < Button>Change password</Button>
      < Button>Change email</Button>
      < Button>Change description</Button>
      < Button>Change website</Button>
      < Button onClick={onLogout}>Log Out</Button>
      <Button onClick={() => { setShowModal(false)}}>Cancel</Button>
    </div>
  )
}

export default SettingsForm;
