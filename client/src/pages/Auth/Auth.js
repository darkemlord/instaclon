import React, { useState } from 'react';
import { Container, Image } from 'semantic-ui-react';
import instaclone from '../../assets/images/instaclone.png';
import './Auth.scss';
import RegisterForm from '../../components/Auth/RegisterForm/RegisterForm'

export const Auth = () => {
  const [ showLogin, setShowLogin] = useState(true)
  return (
    <Container fluid className="auth">
      <Image src={instaclone}/>
      <div className="container-form">
        {showLogin ? (
          <p>Formlario de Login</p>
        ):(
          <RegisterForm />
        )}
      </div>
      <div className="change-form">
        <p>
        { showLogin ? (
          <>
            You haven't an account?
            <span onClick={() => setShowLogin(!showLogin)}>Register!</span>
          </>
        ) : (
          <>
            User your account
            <span onClick={() => setShowLogin(!showLogin)}>Login</span>
          </>
        )}
        </p>
      </div>
    </Container>
  )
}

export default Auth;
