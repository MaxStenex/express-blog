import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import { Footer, Header, PageTop } from "../components";
import { ArticleMain } from "../components/Article";
import getArticleImage from "../utils/functions/getArticleImage";

type ArticlePageInfoType = {
  title: string;
  text: string;
  image: string;
  authorFirstName: string;
  authorLastName: string;
};

const Article: React.FC = () => {
  const params: { articleId: string } = useParams();
  const [articleInfo, setArticleInfo] = useState<ArticlePageInfoType>({
    title: "",
    text: "",
    image: "",
    authorFirstName: "",
    authorLastName: "",
  });

  useEffect(() => {
    const getArticleInfo = async () => {
      const { data } = await api.get(`/posts/article?id=${params.articleId}`);
      const imageInfo = await getArticleImage(
        `posts/articleImage?imagePath=${data.imagePath}`
      );

      setArticleInfo({
        title: data.title,
        text: data.text,
        image: `data:${imageInfo.contentType.toLowerCase()};base64,${
          imageInfo.imageBuffer
        }`,
        authorFirstName: data.authorFirstName,
        authorLastName: data.authorLastName,
      });
    };
    getArticleInfo();
  }, [params.articleId]);

  return (
    <>
      <Header />
      <PageTop
        imageSrc={articleInfo.image}
        title={articleInfo.title}
        authorFirstName={articleInfo.authorFirstName}
        authorLastName={articleInfo.authorLastName}
      />
      <ArticleMain text={articleInfo.text} />
      <Footer />
    </>
  );
};

export default Article;
