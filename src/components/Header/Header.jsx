import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";
import profileIcon from "../../images/account.svg";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <Link to="/" className="logo"><img src={logo} alt="Логотип сайта" className="logo__image" /></Link>
          <div className="header__account">
            {/* <Navigation />
            <Link to="/profile" className="header__user base-link">
              Аккаунт
              <img src={profileIcon} alt="Иконка аккаунта" className="header__user-icon"/>
            </Link> */}
          </div>
          <nav className="header__navigation">
            <ul className="header__lists base-list">
              <li className="header__item">
                <Link to="/signup" className="header__link base-link">Регистрация</Link>
              </li>
              <li className="header__item">
                <Link to="/signin" className="header__button base-button base-button_type_success">Войти</Link>
              </li>
            </ul>
          </nav>
          {/* <button className="header__burger base-button" type="button">
            <span className="header__burger-line"></span>
          </button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
