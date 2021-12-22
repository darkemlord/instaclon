import React from 'react';
import { Form, Button} from 'semantic-ui-react'

const LoginForm = () => {
  return (
    <Form className="login-form">
      <Form.Input
        type="text"
        placeholder="Email"
        name="email"
      >
      </Form.Input>

      <Form.Input
        type="text"
        placeholder="Password"
        name="password"
      ></Form.Input>

      <Button type="submit" className='btn-submit'>
        Login
      </Button>
    </Form>
  )
}

export default LoginForm;
