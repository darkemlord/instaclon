import React from 'react';
import {Form, Button} from 'semantic-ui-react'
import './RegisterForm.scss'

export const RegisterForm = (props) => {
  const { setShowLogin } = props
  const onSubmit = () => {
    console.log('formulario enviado')
  }
  return (
    <>
      <h2 className='register-form-title'>Sign in here</h2>
      <Form className='register-form' onSubmit={onSubmit}>
        <Form.Input type="text" placeholder = "Name" name="name"/>
        <Form.Input type="text" placeholder = "Username" name="username"/>
        <Form.Input type="text" placeholder = "Email" name="email"/>
        <Form.Input type="password" placeholder = "Password" name="password" autoComplete="on"/>
        <Form.Input type="password" placeholder = "Confirm Password" name="confirmPassword" autoComplete="on"/>
        <Button className='btn-submit' type="submit">Sign In</Button>
      </Form>
    </>
  )
}

export default RegisterForm;
