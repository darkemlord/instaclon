import React from 'react';
import './HeaderProfile.scss';
import { Button } from 'semantic-ui-react';

const HeaderProfile = (props) => {
  const { user, auth } = props;
  return (
    <div className='header-profile'>
      <h2>{user.username}</h2>
      {user.username === auth.username ? <Button>Settings</Button> : <Button>Follow</Button>}
    </div>
  )
}

export default HeaderProfile;
