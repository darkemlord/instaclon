import React from 'react';
import './HeaderProfile.scss';
import { Button } from 'semantic-ui-react';

const HeaderProfile = (props) => {
  const { username } = props;
  return (
    <div>{username}</div>
  )
}

export default HeaderProfile;
