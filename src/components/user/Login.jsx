import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';

// Login Component
const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      // Call the login API using Axios
      const response = await axios.post("api", {
        email: values.email,
        password: values.password
      }, {
        withCredentials: true, // Include credentials
        headers: { "Content-Type": "application/json" },
      });

      const data = response.data;

      // Redirect when login is successful
      if (data.success === true) {
        alert("Login successful");
        window.location = "/";
      } else {
        setErrors({ email: '', password: '', error: data.data });
      }
    } catch (error) {
      console.error('Error during login:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
          >
            <Form>
              <h3>Log In</h3>
              <div className="form-group my-1">
                <label className="my-2">Email ID</label>
                <Field type="email" name="email" className="form-control" placeholder="Enter email ID" />
                <ErrorMessage name="email" component="div" className="alert-danger" />
              </div>
              <div className="form-group my-1">
                <label className="my-2">Password</label>
                <Field type="password" name="password" className="form-control" placeholder="Enter password" />
                <ErrorMessage name="password" component="div" className="alert-danger" />
              </div>
              <ErrorMessage name="error" component="div" className="alert-danger" />
              <button type="submit" className="btn btn-primary btn-block w-100 my-3">Log in</button>
              <p>Don't have an account? <a href="/sign-up">register</a></p>
              <p><a href="/forget-password">forget password</a></p>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
