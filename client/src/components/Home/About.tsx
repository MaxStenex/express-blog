import React from "react";
import "../../styles/components/Home/About.scss";
import MernImg from "../../assets/mern.png";

const About: React.FC = () => {
  return (
    <section className="about">
      <div className="about__wrapper">
        <img src={MernImg} alt="" className="about__image" />
        <div className="about__main">
          <h2 className="about__title">About</h2>
          <p className="about__text">
            <p className="about__paragraph">
              Hello! My name is Maxim and i`m a frontend developer.
            </p>
            <p className="about__paragraph">This is my fullstack blog project.</p>
            <p className="about__paragraph">
              <b>Frontend technologies: </b>react, redux, redux-saga, formik, scss, axios.
            </p>
            <p className="about__paragraph">
              <b>Backend technologies: </b>nodejs, multer, mongodb, express, jwt, bcrypt
            </p>
            <p className="about__paragraph">
              ...and ofcourse TypeScript. TypeScript everywhere :D
            </p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
