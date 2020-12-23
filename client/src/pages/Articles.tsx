import React from "react";
import { Header, PageTop } from "../components/shared";
import ArticlesPagePhoto from "../images/articles.jpg";
import { ArticlesMain } from "../components/Articles";

const Articles: React.FC = () => {
  return (
    <>
      <Header />
      <PageTop imageSrc={ArticlesPagePhoto} title="All articles created by users" />
      <ArticlesMain />
    </>
  );
};

export default Articles;
