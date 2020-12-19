import classnames from "classnames";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { fetchUser } from "../../redux/ducks/user/actions";
import { RootStateType } from "../../redux/rootReducer";
import "../../styles/components/Login/LoginMain.scss";
import { LoginValuesType } from "../../types";
import { loginSchema } from "../../utils/validation/login";

const LoginMain: React.FC = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state: RootStateType) => state.user.userInfo._id);
  const fetchUserStatusMessage = useSelector(
    (state: RootStateType) => state.user.fetchStatus.message
  );
  const fetchUserStatusSuccess = useSelector(
    (state: RootStateType) => state.user.fetchStatus.success
  );
  const fetchUserStatusLoading = useSelector(
    (state: RootStateType) => state.user.fetchStatus.loading
  );

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
            onSubmit={(values: LoginValuesType, { resetForm }) => {
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
              <button
                className="login__submit"
                type="submit"
                disabled={fetchUserStatusLoading}
              >
                {fetchUserStatusLoading ? "Loading..." : "Login"}
              </button>
              {fetchUserStatusMessage && (
                <span
                  className={classnames("login__message", {
                    "login__message--success": fetchUserStatusSuccess,
                  })}
                >
                  {fetchUserStatusMessage}
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
