import React from "react";
import "../styles/components/PageTop.scss";
import { Header } from "./";

type PageTopProps = {
  imageSrc: string;
  title: string;
};

const PageTop: React.FC<PageTopProps> = ({ title, imageSrc }) => {
  return (
    <>
      <Header />
      <section
        className="page-top"
        style={{
          background: imageSrc && `url(${imageSrc}) no-repeat center center/cover`,
        }}
      >
        <div className="page-top__shadow"></div>
        <div className="container">
          <h2 className="page-top__title">{title}</h2>
        </div>
      </section>
    </>
  );
};

export default PageTop;
