import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Footer, Header } from "../components";
import { RootStateType } from "../redux/rootReducer";
import "../styles/components/CreateArticle.scss";
import api from "../utils/api";
import { articleSchema } from "../utils/validation/newArticle";
import classnames from "classnames";

type NewArticleValuesType = {
  title: string;
  text: string;
};

const CreateArticle: React.FC = () => {
  const userId = useSelector((state: RootStateType) => state.user._id);
  const [serverResponse, setServerResponse] = useState({
    success: false,
    message: "",
  });

  return (
    <>
      <Header />
      <section className="create-article">
        <div className="create-article__shadow"></div>
        <div className="container">
          <h2 className="create-article__title">Create new Article</h2>
          <Formik
            initialValues={{
              title: "",
              text: "",
            }}
            validationSchema={articleSchema}
            onSubmit={async (values: NewArticleValuesType, { resetForm }) => {
              try {
                const response = await api.post("/posts/create", {
                  authorId: userId,
                  title: values.title,
                  text: values.text,
                });

                setServerResponse({ message: response.data, success: true });
              } catch (error) {
                setServerResponse({
                  message: "Error, post doesnt created",
                  success: false,
                });
              }
              resetForm();
            }}
          >
            <Form className="create-article__form">
              <div className="create-article__title-section">
                <label className="create-article__label">Title</label>
                <div className="create-article__field-wrapper">
                  <Field type="text" className="create-article__input" name="title" />
                  <span>
                    <ErrorMessage name="title" />
                  </span>
                </div>
              </div>
              <div className="create-article__text-section">
                <label className="create-article__label">Text</label>
                <div className="create-article__field-wrapper">
                  <Field
                    as="textarea"
                    cols={30}
                    rows={5}
                    name="text"
                    className="create-article__textarea"
                  />
                  <span>
                    <ErrorMessage name="text" />
                  </span>
                </div>
              </div>
              {serverResponse.message && (
                <span
                  className={classnames(
                    "create-article__response",
                    serverResponse.success && "create-article__response--success"
                  )}
                >
                  {serverResponse.message}
                </span>
              )}
              <button className="create-article__submit-btn" type="submit">
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CreateArticle;
