import React from 'react';
import { Form, Button} from 'semantic-ui-react';
import './LoginForm.scss';

const LoginForm = () => {
  return (
    <Form className="login-form">
      <h2>log in to see what your friends are posting!</h2>
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
