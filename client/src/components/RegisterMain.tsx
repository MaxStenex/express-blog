import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { registerSchema } from "../utils/validation/register";
import "../styles/components/RegisterMain.scss";

interface RegisterValuesType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterMain: React.FC = () => {
  return (
    <>
      <section className="register">
        <div className="register__shadow"></div>
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
              validationSchema={registerSchema}
              onSubmit={(values: RegisterValuesType, { resetForm }) => {
                console.log(values);
                resetForm();
              }}
            >
              <Form className="register__form">
                <div className="register__name-section">
                  <div className="register__field-section">
                    <Field type="text" placeholder="First name" name="firstName" />
                    <span>
                      <ErrorMessage name="firstName" />
                    </span>
                  </div>
                  <div className="register__field-section">
                    <Field type="text" placeholder="Last name" name="lastName" />
                    <span>
                      <ErrorMessage name="lastName" />
                    </span>
                  </div>
                </div>
                <div className="register__field-section">
                  <Field type="email" placeholder="Email" name="email" />
                  <span>
                    <ErrorMessage name="email" />
                  </span>
                </div>
                <div className="register__field-section">
                  <Field type="password" placeholder="Password" name="password" />
                  <span>
                    <ErrorMessage name="password" />
                  </span>
                </div>
                <div className="register__field-section">
                  <Field
                    type="password"
                    placeholder="Confirm password"
                    name="confirmPassword"
                  />
                  <span>
                    <ErrorMessage name="confirmPassword" />
                  </span>
                </div>
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
    </>
  );
};

export default RegisterMain;
