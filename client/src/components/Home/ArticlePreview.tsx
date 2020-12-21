import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/components/Home/ArticlePreview.scss";
import getArticleImage from "../../utils/functions/getArticleImage";

type ArticlePreviewProps = {
  _id: string;
  title: string;
  imagePath: string;
};

const ArticlePreview: React.FC<ArticlePreviewProps> = ({ _id, title, imagePath }) => {
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    (async () => {
      const imageInfo = await getArticleImage(
        `posts/postPreviewImage?imagePath=${imagePath}`
      );
      setImage(
        `data:${imageInfo.contentType.toLowerCase()};base64,${imageInfo.imageBuffer}`
      );
    })();
    //Fixed unmount error
    return () => {
      setImage("");
    };
  }, [imagePath]);

  return (
    <li className="latest__article article-preview">
      <Link to={`/articles/${_id}`}>
        <img src={image} alt="article" className="article-preview__image" />
        <h3 className="article-preview__title">{title}</h3>
      </Link>
    </li>
  );
};

export default ArticlePreview;
