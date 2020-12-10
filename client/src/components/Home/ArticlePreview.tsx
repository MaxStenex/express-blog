import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/Home/ArticlePreview.scss";

type ArticlePreviewProps = {
  title: string;
  previewImg: string;
};

const ArticlePreview: React.FC<ArticlePreviewProps> = ({ title, previewImg }) => {
  return (
    <li className="latest__article article-preview">
      <Link to="/articles/1234">
        <img src={previewImg} alt="article" className="article-preview__image" />
        <h3 className="article-preview__title">{title}</h3>
      </Link>
    </li>
  );
};

export default ArticlePreview;
