import classnames from "classnames";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import { logoutUser } from "../../redux/ducks/user/actions";
import { RootStateType } from "../../redux/rootReducer";
import "../../styles/components/Header.scss";

const Header: React.FC = () => {
  const user = useSelector((state: RootStateType) => state.user.userInfo);
  const dispatch = useDispatch();
  const [togglePopup, setTogglePopup] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

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
          <nav
            className={classnames({
              "header__nav main-nav": true,
              "main-nav__opened": menuOpened,
            })}
            onClick={() => setMenuOpened(!menuOpened)}
          >
            <ul className="main-nav__list">
              <li className="main-nav__item">
                <Link to="/home">home</Link>
              </li>
              <li className="main-nav__item">
                <Link to="/articles/1">articles</Link>
              </li>
              <li className="main-nav__item">
                {user._id ? (
                  <div
                    className={classnames("main-nav__popup", {
                      "main-nav__popup--opened": togglePopup,
                    })}
                    onClick={() => setTogglePopup(!togglePopup)}
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
