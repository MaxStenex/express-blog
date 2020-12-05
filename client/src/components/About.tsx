import React from "react";
import "../styles/components/About.scss";

const About: React.FC = () => {
  return (
    <section className="about">
      <div className="about__wrapper">
        <img
          src="https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg"
          alt=""
          className="about__image"
        />
        <div className="about__main">
          <h2 className="about__title">About</h2>
          <p className="about__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quis,
            reiciendis dignissimos iste iusto quia voluptatum dolore sit illum, animi
            laborum. Earum enim officiis voluptates dolor cumque molestiae! Quaerat rem
            corporis similique totam amet sed quas doloremque, inventore debitis eos!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
