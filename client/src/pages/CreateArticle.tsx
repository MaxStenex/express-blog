import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Footer, Header } from "../components";
import { RootStateType } from "../redux/rootReducer";
import "../styles/components/CreateArticle.scss";
import api from "../api";
import { articleSchema } from "../utils/validation/newArticle";
import classnames from "classnames";

type NewArticleValuesType = {
  title: string;
  text: string;
  file: any;
};

const CreateArticle: React.FC = () => {
  const userId = useSelector((state: RootStateType) => state.user.userInfo._id);
  const [loading, setLoading] = useState(false);
  const [serverResponse, setServerResponse] = useState({
    success: false,
    message: "",
  });

  const [imageError, setImageError] = useState("");

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
              file: File,
            }}
            validationSchema={articleSchema}
            onSubmit={async (values: NewArticleValuesType, { resetForm }) => {
              try {
                if (!userId) return;

                setLoading(true);
                const img = new Image();
                img.src = window.URL.createObjectURL(values.file);
                img.onload = async () => {
                  if (+img.width < 1270) {
                    return setImageError("Image width should be > 1270");
                  }
                  if (+img.height < 720) {
                    return setImageError("Image height should be > 720");
                  }

                  const formData = new FormData();
                  formData.append("postPhoto", values.file);
                  formData.append("authorId", userId);
                  formData.append("title", values.title);
                  formData.append("text", values.text);

                  // const response = await api.post("/posts/create", {
                  //   authorId: userId,
                  //   title: values.title,
                  //   text: values.text,
                  // });

                  const response = await api.post("/posts/create", formData, {
                    headers: {
                      "Content-Type": `multipart/form-data`,
                    },
                  });

                  setServerResponse({ message: response.data, success: true });
                  setImageError("");
                  resetForm();
                };
              } catch (error) {
                setServerResponse({
                  message: "Error, post doesnt created",
                  success: false,
                });
                resetForm();
              }
              setLoading(false);
            }}
          >
            {({ setFieldValue }) => (
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
                <div className="create-article__file-section">
                  <label className="create-article__label">Article Photo</label>
                  <div className="create-article__field-wrapper">
                    <input
                      type="file"
                      name="file"
                      className=""
                      onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                        setFieldValue(
                          "file",
                          evt.currentTarget.files && evt.currentTarget.files[0]
                        );
                      }}
                    />
                    {imageError && <span>{imageError}</span>}
                    <span>
                      <ErrorMessage name="file" />
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
                <button
                  className="create-article__submit-btn"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Submit"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CreateArticle;
