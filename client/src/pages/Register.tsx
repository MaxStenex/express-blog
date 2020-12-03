import React from "react";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import "../styles/components/Register.scss";

const Register: React.FC = () => {
  return (
    <section className="register">
      <div className="container">
        <div className="register__wrapper">
          <div className="register__title">
            <span></span>
            <h2>Register</h2>
            <span></span>
          </div>
          <span className="register__subtitle">Create your account.</span>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              resetForm();
            }}
          >
            <Form className="register__form">
              <div className="register__name-section">
                <Field type="text" placeholder="First name" name="firstName" />
                <Field type="text" placeholder="Last name" name="lastName" />
              </div>
              <Field type="email" placeholder="Email" name="email" />
              <Field type="password" placeholder="Password" name="password" />
              <Field
                type="password"
                placeholder="Confirm password"
                name="confirmPassword"
              />
              <button className="register__submit" type="submit">
                Register now
              </button>
            </Form>
          </Formik>
        </div>
        <div className="register__sign">
          <span>
            Already have an account? <Link to="/login">Sign in</Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Register;
