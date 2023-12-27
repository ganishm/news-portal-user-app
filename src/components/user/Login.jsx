import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { signInWithGoogle } from "../../firebase";
import { config } from "../../config";

// Login Component
const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
      ),
  });

  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post(
        "api",
        {
          email: values.email,
          password: values.password,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = response.data;

      if (data.success === true) {
        alert("Login successful");
        navigate("/");
      } else {
        setErrors({ email: "", password: "", error: data.data });
      }
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setSubmitting(false);
    }
  };

  let triggerGoogleLogin = async () => {
    try {
      const { user } = await signInWithGoogle();
      console.log(user.accessToken);
      const loginResp = await axios.post(
        `${config.api}/users/sign-in-with-firebase`,
        { token: user.accessToken }
      );
      localStorage.setItem("token", loginResp.data.token);
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <h3>Log In</h3>
              <div className="form-group my-1">
                <label className="my-2">Email ID</label>
                <Field
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter email ID"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="alert-danger"
                />
              </div>
              <div className="form-group my-1">
                <label className="my-2">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="alert-danger"
                />
              </div>
              <ErrorMessage
                name="error"
                component="div"
                className="alert-danger"
              />
              <button
                type="submit"
                className="btn btn-primary btn-block w-100 my-3"
              >
                Log in
              </button>
              <p>
                Don't have an account? <a href="/sign-up">register</a>
              </p>
              <p>
                <a href="/forget-password">forget password</a>
              </p>
            </Form>
          </Formik>
          <button onClick={triggerGoogleLogin}>Signin with Google</button>
        </div>
      </div>
    </>
  );
};

export default Login;
