import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import './RegisterForm.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation} from '@apollo/client';
import { REGISTER } from '../../../gql/user'

export const RegisterForm = (props) => {
  const { setShowLogin } = props;
  const [ register ] = useMutation(REGISTER)

  const formik = useFormik({
    initialValues: initialValues() ,
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      username: Yup.string().matches(/^[a-zA-Z0-9-]*$/, 'Username shouldn\'t contain spaces').required(true),
      email: Yup.string().email('email is not valid').required('Email is required'),
      password: Yup.string().required('password is required')
      .oneOf([Yup.ref('confirmPassword')], 'Password doesn\'t match'),
      confirmPassword: Yup.string().required('password is required')
      .oneOf([Yup.ref('password')], 'Password doesn\'t match')
    }),
    onSubmit: async (formData) => {
      try{
        const newUser = formData;
        delete newUser.confirmPassword;
        const result = await register({
          variables: {
            input: newUser
          }
        });
        console.log(result)
      }catch(err){
        console.log(err)
      }
      formik.handleReset();
    }
  })

  return (
    <>
      <h2 className='register-form-title'>Sign in here</h2>
      <Form className='register-form' onSubmit={formik.handleSubmit}>
        <Form.Input
          type="text"
          placeholder = "Name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          error={formik.errors.name && true}
          />
        <Form.Input
          type="text"
          placeholder = "Username"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
          error={formik.errors.username && true}
        />
        <Form.Input
          type="text"
          placeholder = "Email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email && true}
        />
        <Form.Input
          type="password"
          placeholder = "Password"
          name="password"
          autoComplete="on"
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.errors.password && true}
        />
        <Form.Input
          type="password"
          placeholder = "Confirm Password"
          name="confirmPassword"
          autoComplete="on"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          error={formik.errors.confirmPassword && true}
        />
        <Button className='btn-submit' type="submit">Sign In</Button>
      </Form>
    </>
  )
}

export default RegisterForm;

function initialValues(){
    return {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
}
