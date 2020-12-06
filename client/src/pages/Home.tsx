import React from "react";
import { Footer, PageTop } from "../components";
import { About, LatestArticles } from "../components/Home";

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
