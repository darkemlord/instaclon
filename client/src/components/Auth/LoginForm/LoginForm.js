import React from 'react';
import { Form, Button} from 'semantic-ui-react';
import './LoginForm.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      email: Yup.string().email().required('Email is required'),
      password: Yup.string().password().required('Password is required')
    }),
    onSubmit: (formData) => {
      console.log(formData)
    }
  })
  return (
    <Form className="login-form" onSubmit={formik.handleSubmit}>
      <h2>log in to see what your friends are posting!</h2>
      <Form.Input
        type="text"
        placeholder="Email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      >
      </Form.Input>

      <Form.Input
        type="password"
        placeholder="Password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        autoComplete="on"
      ></Form.Input>

      <Button type="submit" className='btn-submit'>
        Login
      </Button>
    </Form>
  )
}
const initialValues = () => {
  return {
    email: '',
    password: '',
  }
}
export default LoginForm;
