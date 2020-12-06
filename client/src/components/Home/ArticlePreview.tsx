import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/ArticlePreview.scss";

const ArticlePreview: React.FC = () => {
  return (
    <li className="latest__article article-preview">
      <Link to="/home">
        <img
          src="https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg"
          alt="article"
          className="article-preview__image"
        />
        <h3 className="article-preview__title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, totam?
        </h3>
      </Link>
    </li>
  );
};

export default ArticlePreview;
