import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Login.scss";
import { loginSchema } from "../utils/validation/login";

interface LoginValuesType {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  return (
    <section className="login">
      <div className="container">
        <div className="login__wrapper">
          <div className="login__title">
            <span></span>
            <h2>Login</h2>
            <span></span>
          </div>
          <span className="login__subtitle">Sign up in account</span>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginSchema}
            onSubmit={(values: LoginValuesType, { resetForm }) => {
              console.log(values);
              resetForm();
            }}
          >
            <Form className="login__form">
              <div className="login__field-section">
                <Field type="email" placeholder="Email" name="email" />
                <span>
                  <ErrorMessage name="email" />
                </span>
              </div>
              <div className="login__field-section">
                <Field type="password" placeholder="Password" name="password" />
                <span>
                  <ErrorMessage name="password" />
                </span>
              </div>
              <button className="login__submit" type="submit">
                Login
              </button>
            </Form>
          </Formik>
        </div>
        <div className="login__register">
          <span>
            Dont have an account? <Link to="/register">Register now</Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Login;
