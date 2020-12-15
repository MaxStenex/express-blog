import classnames from "classnames";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setUser } from "../../redux/ducks/user/actions";
import { RootStateType } from "../../redux/rootReducer";
import "../../styles/components/Login/LoginMain.scss";
import api from "../../utils/api";
import { loginSchema } from "../../utils/validation/login";

type LoginValuesType = {
  email: string;
  password: string;
};

const LoginMain: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [serverResponse, setServerResponse] = useState({
    message: "",
    success: true,
  });
  const dispatch = useDispatch();
  const userId = useSelector((state: RootStateType) => state.user._id);

  if (userId) {
    return <Redirect to="/home" />;
  }

  return (
    <section className="login">
      <div className="login__shadow"></div>
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
            onSubmit={async (values: LoginValuesType, { resetForm }) => {
              try {
                const response = await api.post("auth/login", values);
                dispatch(
                  setUser({
                    _id: response.data._id,
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                  })
                );

                localStorage.setItem("token", response.headers.token);
              } catch (error) {
                setServerResponse({
                  message: error.response.data.error,
                  success: false,
                });
                resetForm();
                setLoading(false);
              }
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
              <button className="login__submit" type="submit" disabled={loading}>
                {loading ? "Logining in..." : "Login"}
              </button>
              {serverResponse.message && (
                <span
                  className={classnames("login__message", {
                    "login__message--success": serverResponse.success,
                  })}
                >
                  {serverResponse.message}
                </span>
              )}
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

export default LoginMain;
