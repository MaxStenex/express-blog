import React from "react";
import "../styles/components/Footer.scss";
import GitHub from "../assets/githublink.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h2 className="footer__title">Created by Maxim Rozinkevich</h2>
        <ul className="footer__links">
          <li className="footer__link">
            <a href="https://github.com/MaxStenex" target="blank">
              <span>GitHub account </span>
              <img src={GitHub} alt="github" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;