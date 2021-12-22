import React, { useState } from 'react';
import { Form, Button} from 'semantic-ui-react';
import './LoginForm.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../../gql/user'

const LoginForm = () => {
  const [login] = useMutation(LOGIN)
  const [error, setError] = useState('');

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      email: Yup.string().email().required('Email is required'),
      password: Yup.string().required('Password is required')
    }),
    onSubmit: async (formData) => {
      try{
        const result = await login({
          variables:{
            input: formData
          }
        });
        console.log(result)
      }
      catch(err){
        setError(err.message)
        console.log(err)
      }
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
        error={formik.errors.email && true}
      >
      </Form.Input>

      <Form.Input
        type="password"
        placeholder="Password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        autoComplete="on"
        error={formik.errors.password && true }
      ></Form.Input>

      <Button type="submit" className='btn-submit'>
        Login
      </Button>
      {error && <p className='submit-error'>{error}</p>}
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
