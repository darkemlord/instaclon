import React from 'react';
import {Form, Button} from 'semantic-ui-react'
import './RegisterForm.scss'

export const RegisterForm = (props) => {
  const { setShowLogin } = props
  console.log(props)
  return (
    <>
      <h2 className='register-form-title'>Sign in here</h2>
      <Form className='register-form'>
        <Form.Input type="text" placeholder = "Name" name="name"/>
        <Form.Input type="text" placeholder = "Username" name="username"/>
        <Form.Input type="text" placeholder = "Email" name="email"/>
        <Form.Input type="password" placeholder = "Password" name="password"/>
        <Form.Input type="password" placeholder = "Confirm Password" name="confirmPassword"/>
        <Button className='btn-submit'>Sign In</Button>
      </Form>
    </>
  )
}

export default RegisterForm;
