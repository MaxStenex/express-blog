import React from "react";
import { Footer, Header } from "../components";
import "../styles/components/CreateArticle.scss";

const CreateArticle: React.FC = () => {
  return (
    <>
      <Header />
      <section className="create-article">
        <div className="create-article__shadow"></div>
        <div className="container">
          <h2 className="create-article__title">Create new Article</h2>
          <form className="create-article__form">
            <div className="create-article__title-section">
              <label className="create-article__label">Title</label>
              <input type="text" className="create-article__input" />
            </div>
            <div className="create-article__text-section">
              <label className="create-article__label">Text</label>
              <textarea cols={30} rows={5} className="create-article__textarea" />
            </div>
            <button className="create-article__submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CreateArticle;
