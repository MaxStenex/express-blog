import { Formik, Field, Form } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Login.scss";

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
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              resetForm();
            }}
          >
            <Form className="login__form">
              <Field type="email" placeholder="Email" name="email" />
              <Field type="password" placeholder="Password" name="password" />
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
