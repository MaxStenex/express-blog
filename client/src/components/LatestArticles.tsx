import React from "react";
import "../styles/components/LatestArticles.scss";
import { ArticlePreview } from "./";

const LatestArticles: React.FC = () => {
  return (
    <section className="latest">
      <div className="container">
        <h2 className="latest__title">latest articles</h2>
        <ul className="latest__articles">
          <ArticlePreview />
          <ArticlePreview />
          <ArticlePreview />
        </ul>
      </div>
    </section>
  );
};

export default LatestArticles;
