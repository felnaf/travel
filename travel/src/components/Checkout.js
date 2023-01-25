import React  from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { postCheckoutData } from '../actions';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initial = { billing: '', shipping: '', checked: '' };
  const validation = Yup.object({
    billing: Yup.string()
      .max(80, 'Must be 80 characters or less')
      .required('Required'),
    shipping: Yup.string()
      .max(80, 'Must be 80 characters or less')
      .required('Required'),
    checked: Yup.string().required('Required'),
  });

  return (
    <div>
      <Formik
        initialValues={initial}
        validationSchema={validation}
        onSubmit={(values, { resetForm }) => {
          dispatch(postCheckoutData(values));
          navigate('/thankyou');
          resetForm();
        }}
      >
        <Form>
          <div className="container mt-5">
            <div className="mb-4 ">
              <div>
                <label htmlFor="billing">Billing Adress</label>
              </div>

              <Field
                name="billing"
                as="textarea"
                className="form-textarea form-control"
              />
              <div className="text-danger">
                <ErrorMessage name="billing" />
              </div>

              <div className="mb-4">
                <label htmlFor="shipping">Shipping Address</label>
              </div>
              <Field
                name="shipping"
                as="textarea"
                className="form-textarea form-control"
              />
              <div className="text-danger">
                <ErrorMessage name="shipping" />
              </div>
            </div>

            <div className="mb-4">
              {/* <div> */}
              <label> Payment: </label>
              {/* </div> */}
              <Field type="checkbox" name="checked" />
              <label> Cash on Delivery only</label>
              <div className="text-danger">
                <ErrorMessage name="checked" />
              </div>
            </div>
            <div className="mb-4">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Checkout;
