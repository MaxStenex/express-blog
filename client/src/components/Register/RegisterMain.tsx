import classnames from "classnames";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/components/Register/RegisterMain.scss";
import api from "../../utils/api";
import { registerSchema } from "../../utils/validation/register";

type RegisterValuesType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterMain: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const [serverResponse, setServerResponse] = useState({
    message: "",
    success: true,
  });

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
              onSubmit={async (values: RegisterValuesType, { resetForm }) => {
                setLoading(true);
                const { firstName, lastName, email, password } = values;
                try {
                  const response = await api.post("auth/register", {
                    firstName,
                    lastName,
                    email,
                    password,
                  });
                  setServerResponse({ message: response.data.message, success: true });
                } catch (error) {
                  setServerResponse({
                    message: error.response.data.error,
                    success: false,
                  });
                }
                setLoading(false);
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
                <button className="register__submit" type="submit" disabled={loading}>
                  {loading ? "Loading..." : "Register now"}
                </button>
                {serverResponse.message && (
                  <span
                    className={classnames("register__message", {
                      "register__message--success": serverResponse.success,
                    })}
                  >
                    {serverResponse.message}
                  </span>
                )}
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
