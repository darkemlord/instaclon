import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import './RegisterForm.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const RegisterForm = (props) => {
  const { setShowLogin } = props;

  const formik = useFormik({
    initialValues: initialValues() ,
    validationSchema: Yup.object({
      name: Yup.string().required(true),
      username: Yup.string().required(true),
    }),
    onSubmit: (formValue) => {
      console.log('Form sended!')
      console.log(formValue)
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
          />
        <Form.Input
          type="text"
          placeholder = "Username"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <Form.Input
          type="text"
          placeholder = "Email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <Form.Input
          type="password"
          placeholder = "Password"
          name="password"
          autoComplete="on"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Form.Input
          type="password"
          placeholder = "Confirm Password"
          name="confirmPassword"
          autoComplete="on"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
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
