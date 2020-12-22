import React from "react";
import "../../styles/components/Articles/ArticlesList.scss";
import { ArticlePreview } from "../shared";
import Paginator from "./Paginator";

const ArticlesList: React.FC = () => {
  return (
    <section className="articles-list">
      <div className="container">
        <div className="articles-list__wrapper">
          <div className="articles-list__main">
            <ArticlePreview _id="1" title="123" imagePath="123" />
            <ArticlePreview _id="1" title="123" imagePath="123" />
            <ArticlePreview _id="1" title="123" imagePath="123" />
          </div>
          <Paginator />
        </div>
      </div>
    </section>
  );
};

export default ArticlesList;
