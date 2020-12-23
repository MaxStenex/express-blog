import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import "../../styles/components/Articles/ArticlesList.scss";
import { ArticlePreview } from "../shared";
import { ArticlePreviewProps } from "../shared/ArticlePreview";
import Paginator from "./Paginator";

const ArticlesList: React.FC = () => {
  const [pagesCount, setPagesCount] = useState<number>(0);
  const [articles, setArticles] = useState<Array<ArticlePreviewProps>>([]);
  const params: { pageNumber: string } = useParams();

  useEffect(() => {
    const getArticlesPageContent = async () => {
      const { data } = await api.get(`posts/${params.pageNumber}`);
      setPagesCount(data.pagesCount);
      setArticles(
        data.posts.map((articleInfo: any) => ({
          _id: articleInfo._id,
          title: articleInfo.title,
          imagePath: articleInfo.photoName,
        }))
      );
    };
    getArticlesPageContent();
  }, [params.pageNumber]);

  return (
    <section className="articles-list">
      <div className="container">
        <div className="articles-list__wrapper">
          <div className="articles-list__main">
            {articles.map((article: ArticlePreviewProps) => (
              <ArticlePreview
                key={article._id}
                _id={article._id}
                title={article.title}
                imagePath={article.imagePath}
              />
            ))}
          </div>
          <Paginator pagesCount={pagesCount} />
        </div>
      </div>
    </section>
  );
};

export default ArticlesList;
