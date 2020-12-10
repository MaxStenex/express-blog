import React from "react";
import "../../styles/components/Home/LatestArticles.scss";
import { ArticlePreview } from "./";

const LatestArticles: React.FC = () => {
  return (
    <section className="latest">
      <div className="container">
        <h2 className="latest__title">latest articles</h2>
        <ul className="latest__articles">
          <ArticlePreview
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, consequuntur!"
            previewImg="https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg"
          />
          <ArticlePreview
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, consequuntur!"
            previewImg="https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg"
          />
          <ArticlePreview
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, consequuntur!"
            previewImg="https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg"
          />
        </ul>
      </div>
    </section>
  );
};

export default LatestArticles;
