import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { loginInAction } from '../actions';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const Login = () => {
  const { userLoggedIn } = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="container mt-5 ">
      
      <Formik
        initialValues={{ email: '', phoneNumber: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          phoneNumber: Yup.string().required('Required'),
        })}
        onSubmit={(values, { resetForm }) => {
          dispatch(loginInAction(values, () => navigate('/')));
          resetForm();
        }}
      >
         {/* <Card style={{ width: '25rem',height:'18rem'}} className='card-style'> */}
        <Form className="login">
          <div className="mb-4 ml-5 mt-3">
            <div>
              <label htmlFor="email">Email Address</label>
            </div>

            <Field name="email" type="email" className="form-control box" />
            <div className="text-danger">
              <ErrorMessage name="email" />
            </div>
          </div>

          <div className="mb-4 ml-5 mt-3">
            <div>
              <label>Password</label>
            </div>

            <Field
              name="phoneNumber"
              type="password"
              className="form-control box"
            ></Field>
            <div className="text-danger">
              <ErrorMessage name="phoneNumber" />
            </div>
          </div>

          <button type="submit" className="btn btn-primary ml-5">
            Login
          </button>
        </Form>
        {/* </Card> */}
      </Formik>
    </div>
  );
};

export default Login;
