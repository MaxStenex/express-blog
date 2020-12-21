import React from "react";
import "../styles/components/PageTop.scss";
import { Header } from "./";

type PageTopProps = {
  imageSrc: string;
  title: string;
  authorFirstName?: string;
  authorLastName?: string;
};

const PageTop: React.FC<PageTopProps> = ({
  title,
  imageSrc,
  authorFirstName,
  authorLastName,
}) => {
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
          {(authorFirstName || authorLastName) && (
            <div className="page-top__author">
              <div className="page-top__author-wrapper">
                <span>Author:</span>
                <span>{authorFirstName}</span>
                <span>{authorLastName}</span>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PageTop;
