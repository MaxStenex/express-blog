import React from "react";
import "../styles/components/PageTop.scss";
import { Header } from "./";

const PageTop: React.FC = () => {
  return (
    <>
      <Header />
      <section className="page-top">
        <div className="page-top__shadow"></div>
        <div className="container">
          <h2 className="page-top__title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae labore sed sequi
            laborum ipsa magnam.
          </h2>
        </div>
      </section>
    </>
  );
};

export default PageTop;
