import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";
import profileIcon from "../../images/profile-icon.svg";
import Navigation from "../Navigation/Navigation";

const Header = ({ loggedIn }) => {
  const [isVisibleBurgerMenu, setIsVisibleBurgerMenu] = React.useState(false);
  const openBurgerMenu = () => {setIsVisibleBurgerMenu(!isVisibleBurgerMenu);};
  const closeBurgerMenu = () => {setIsVisibleBurgerMenu(false);};
  
  return (
    <header className="header">
      <div className="container">
      
        {isVisibleBurgerMenu && (
          <div className="header__background"></div>
        )}
         
        <div className="header__block">
          <Link to="/" className="logo">
            <img src={logo} alt="Логотип сайта" className="logo__image" />
          </Link>
          {loggedIn ? (
            <>
              <div 
                className={`header__account ${ 
                  isVisibleBurgerMenu ? "header__account_opened" : "" 
                  }`}>
                <Navigation closeBurgerMenu={closeBurgerMenu} />
                <Link to="/profile" className="header__user base-link" onClick={closeBurgerMenu}>
                  Аккаунт
                  <img src={profileIcon} alt="Иконка аккаунта" className="header__user-icon"/>
                </Link>
              </div>
              <button className={`header__burger ${ isVisibleBurgerMenu ? "header__burger_active" : "" }`} type="button" onClick={openBurgerMenu}>
                <span className={`header__burger-line ${ isVisibleBurgerMenu ? "header__burger-line_active" : "" }`}></span>
              </button> 
            </>
          ) : (
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
          )}
          
        </div>
      </div>
    </header>
  );
};

export default Header;
