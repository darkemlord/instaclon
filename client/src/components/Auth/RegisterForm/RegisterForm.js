import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import './RegisterForm.scss';
import { useFormik } from 'formik';

export const RegisterForm = (props) => {
  const { setShowLogin } = props;

  const formik = useFormik({
    initialValues: initialValue() ,
    validationSchema: null,
    onSubmit: (formValue) => {
      console.log('Form sended!')
      console.log(formValue)
    }
  })

  return (
    <>
      <h2 className='register-form-title'>Sign in here</h2>
      <Form className='register-form' onSubmit={formik.handleSubmit}>
        <Form.Input type="text" placeholder = "Name" name="name" onChange={formik.handleChange}/>
        <Form.Input type="text" placeholder = "Username" name="username" onChange={formik.handleChange}/>
        <Form.Input type="text" placeholder = "Email" name="email" onChange={formik.handleChange}/>
        <Form.Input type="password" placeholder = "Password" name="password" autoComplete="on" onChange={formik.handleChange}/>
        <Form.Input type="password" placeholder = "Confirm Password" name="confirmPassword" autoComplete="on" onChange={formik.handleChange}/>
        <Button className='btn-submit' type="submit">Sign In</Button>
      </Form>
    </>
  )
}

export default RegisterForm;

function initialValue(){
    return {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
}
