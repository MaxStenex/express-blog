import classnames from "classnames";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { fetchUser } from "../../redux/ducks/user/actions";
import { RootStateType } from "../../redux/rootReducer";
import "../../styles/components/Login/LoginMain.scss";
import { LoginValuesType } from "../../types";
import { loginSchema } from "../../utils/validation/login";
import { LoadingStatus } from "../../types/";

const LoginMain: React.FC = () => {
  const [serverResponse, setServerResponse] = useState<LoadingStatus>({
    message: null,
    success: null,
  });
  const dispatch = useDispatch();
  const userId = useSelector((state: RootStateType) => state.user.userInfo._id);
  const fetchUserStatusMessage = useSelector(
    (state: RootStateType) => state.user.fetchStatus.message
  );
  const fetchUserStatusSuccess = useSelector(
    (state: RootStateType) => state.user.fetchStatus.success
  );

  useEffect(() => {
    setServerResponse({
      message: fetchUserStatusMessage,
      success: fetchUserStatusSuccess,
    });
  }, [fetchUserStatusMessage, fetchUserStatusSuccess]);

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
              dispatch(fetchUser(values));
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
                "Login"
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
