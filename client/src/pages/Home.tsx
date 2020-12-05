import React from "react";
import { About, Footer, LatestArticles, PageTop } from "../components";

const Home: React.FC = () => {
  return (
    <>
      <PageTop />
      <LatestArticles />
      <About />
      <Footer />
    </>
  );
};

export default Home;
