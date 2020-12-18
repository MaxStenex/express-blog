import Logo from "../assets/logo.png";
import React, { useState } from "react";
import "../styles/components/Header.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../redux/rootReducer";
import { logoutUser } from "../redux/ducks/user/actions";
import classnames from "classnames";

const Header: React.FC = () => {
  const user = useSelector((state: RootStateType) => state.user.userInfo);
  const dispatch = useDispatch();
  const [togglePopup, setTogglePopup] = useState(false);

  const onLogout = (evt: React.SyntheticEvent<HTMLButtonElement>) => {
    dispatch(logoutUser());
    localStorage.removeItem("token");
  };

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
                {user._id ? (
                  <div
                    className={classnames("main-nav__popup", {
                      "main-nav__popup--opened": togglePopup,
                    })}
                    onMouseEnter={() => setTogglePopup(!togglePopup)}
                    onMouseLeave={() => setTogglePopup(!togglePopup)}
                  >
                    <span className="main-nav__hello">Hello, {user.firstName}</span>
                    <div className="main-nav__popup-body">
                      <button className="main-nav__logout-btn" onClick={onLogout}>
                        Logout
                      </button>
                      <Link to="/create_article">New Article</Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <Link to="/login">Login</Link>
                    <span>/</span>
                    <Link to="/register">Register</Link>
                  </>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
