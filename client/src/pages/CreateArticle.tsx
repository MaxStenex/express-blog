import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Footer, Header } from "../components";
import "../styles/components/CreateArticle.scss";
import { articleSchema } from "../utils/validation/newArticle";

type NewArticleValuesType = {
  title: string;
  text: string;
};

const CreateArticle: React.FC = () => {
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
              console.log(values);
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
