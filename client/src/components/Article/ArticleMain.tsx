import React from "react";
import "../../styles/components/Article/ArticleMain.scss";

type ArticleMainProps = {
  text: string;
};

const ArticleMain: React.FC<ArticleMainProps> = ({ text }) => {
  return (
    <section className="article-main">
      <div className="container">
        <p className="article-main__text">
          <span className="article-main__first-symbol">{text.trim().slice(0, 1)}</span>
          {text.trim().slice(1)}
        </p>
      </div>
    </section>
  );
};

export default ArticleMain;
