import React from "react";
import { Footer, Header, PageTop } from "../components/shared";
import { About, LatestArticles } from "../components/Home";
import HomeImage from "../images/main_bg.jpg";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <PageTop imageSrc={HomeImage} title="Blog about everything" />
      <LatestArticles />
      <About />
      <Footer />
    </>
  );
};

export default Home;
