import Logo from "../assets/logo.png";
import React from "react";
import "../styles/components/Header.scss";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__main">
          <Link to="/home" className="header__logo">
            <img src={Logo} alt="Everything" />
          </Link>
          <nav className="header__nav main-nav">
            <ul className="main-nav__list">
              <li className="main-nav__item">
                <Link to="/home">about</Link>
              </li>
              <li className="main-nav__item">
                <Link to="/home">articles</Link>
              </li>
              <li className="main-nav__item">
                <Link to="/login">Login</Link>
                <span>/</span>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
