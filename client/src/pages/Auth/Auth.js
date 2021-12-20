import React, { useState } from 'react';
import { Container, Image } from 'semantic-ui-react';
import instaclone from '../../assets/images/instaclone.png';
import './Auth.scss';

export const Auth = () => {
  return (
    <Container fluid className="auth">
      <Image src={instaclone}/>
      <div className="container-form">
        <h1>hello world</h1>
      </div>
    </Container>
  )
}

export default Auth;
