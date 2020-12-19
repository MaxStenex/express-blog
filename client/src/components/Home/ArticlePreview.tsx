import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api";
import "../../styles/components/Home/ArticlePreview.scss";

type ArticlePreviewProps = {
  title: string;
  imagePath: string;
};

const ArticlePreview: React.FC<ArticlePreviewProps> = ({ title, imagePath }) => {
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    (async () => {
      const response = await api.get(`posts/postPreviewImage?imagePath=${imagePath}`, {
        responseType: "arraybuffer",
      });
      const imgBuffer = Buffer.from(response.data, "binary").toString("base64");
      setImage(
        `data:${response.headers["content-type"].toLowerCase()};base64,${imgBuffer}`
      );
    })();
  }, [imagePath]);

  return (
    <li className="latest__article article-preview">
      <Link to="/articles/1234">
        <img src={image} alt="article" className="article-preview__image" />
        <h3 className="article-preview__title">{title}</h3>
      </Link>
    </li>
  );
};

export default ArticlePreview;
