import React from "react";
import { Footer, Header, PageTop } from "../components";
import { ArticleMain } from "../components/Article";

const Article: React.FC = () => {
  return (
    <>
      <Header />
      <PageTop
        imageSrc="https://kipmu.ru/wp-content/uploads/prrda2-scaled.jpg"
        title="dsadsaasdnasKdAJKLSjkasdajshjkbdassdsadkhasdhas"
      />
      <ArticleMain
        text=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia maxime adipisci
          dignissimos necessitatibus perferendis dolores voluptatibus non. Obcaecati ipsam
          nostrum totam sint corporis similique magni consequatur. Hic iste odit delectus
          placeat laboriosam sapiente id aliquam, tenetur debitis amet dolor et? Ipsa non
          tenetur, blanditiis sit veritatis, illum necessitatibus ad veniam amet nihil
          magni explicabo velit laborum! Eaque vitae nihil magni laboriosam fugiat beatae
          vel nemo harum accusamus dolores exercitationem omnis rem corrupti eos quibusdam
          non, officiis incidunt quae quaerat! Quibusdam et nobis illum debitis ratione
          provident quos repudiandae, reprehenderit doloribus? "
      />
      <Footer />
    </>
  );
};

export default Article;
