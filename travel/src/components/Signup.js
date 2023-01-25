import React, { useState } from 'react';

//importing Formik and Yup for validation
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// importing image uploader
import ImageUploader from 'react-images-upload';

import { useDispatch } from 'react-redux';
import { signUpAction } from '../actions';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const initial = { Name: '', email: '', phoneNumber: '', message: '' };
  const [image, setImage] = useState('');
  const [errorImage, setErrorImage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDrop = (pictureFiles, pictureDataURLs) => {
    setImage(pictureDataURLs);
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validation = Yup.object({
    Name: Yup.string()
      .max(8, 'Must be 15 characters or less')
      .min(3, 'Too short')
      .required('Name is Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is Required'),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Phone is Required'),
    message: Yup.string()
      .max(60, 'Must be 60 characters or less')
      .min(10, 'Minimum  10 characters ')
      .required('Address is Required'),
  });
  return (
    <div className="mt-4 container">
      <h3>Sign Up</h3>
      <Formik
        initialValues={initial}
        validationSchema={validation}
        onSubmit={(values, { setSubmitting }) => {
          if (image === '') {
            setErrorImage('Required');
          } else {
            values = { ...values, image };
            setTimeout(() => {
              dispatch(signUpAction(values, () => navigate('/login')));
              setSubmitting(false);
            }, 400);
          }
        }}
      >
        <Form>
          <div className="mb-4 mt-2">
            <div>
              <label htmlFor="Name">Name</label>
            </div>

            <Field name="Name" type="text" className="form-control" />
            <div className="text-danger">
              <ErrorMessage name="Name" />
            </div>
          </div>

          <div className="mb-4">
            <div>
              <label htmlFor="email">Email Address</label>
            </div>
            <Field name="email" type="email" className="form-control" />
            <div className="text-danger">
              <ErrorMessage name="email" />
            </div>
          </div>

          <div className="mb-4">
            <div>
              <label>Phone</label>
            </div>
            <Field name="phoneNumber" type="text" className="form-control" />
            <div className="text-danger">
              <ErrorMessage name="phoneNumber" />
            </div>
          </div>

          <div className="mb-4">
            <div>
              <label>Address</label>
            </div>
            <Field
              name="message"
              as="textarea"
              className="form-textarea form-control"
            />
            <div className="text-danger">
              <ErrorMessage name="message" />
            </div>
          </div>

          <label>Photo</label>
          <ImageUploader
            withIcon={true}
            buttonText="Choose images"
            value={image}
            withPreview={true}
            onChange={onDrop}
            imgExtension={['.jpg', '.gif', '.jpeg', '.png', '.gif']}
            maxFileSize={5242880}
          />
          <div className="text-danger">
            {/* <ErrorMessage name="message" /> */}
            <div>{errorImage}</div>
          </div>
          <div className="mb-4">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Signup;
