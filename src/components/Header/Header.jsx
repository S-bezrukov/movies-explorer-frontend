import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";
import profileIcon from "../../images/account.svg";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  useEffect(() => {
    // Закрывать бургер-меню при переходе на другую страницу
    setIsBurgerMenuOpen(false);
  }, [location.pathname]);
  
  return (
    <header className="header">
      <div className="container">
      
        {isBurgerMenuOpen && (
          <div className="header__background"></div>
        )}
        <div className="header__block">
          <Link to="/" className="logo"><img src={logo} alt="Логотип сайта" className="logo__image" /></Link>
          {isHomePage ? (
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
          ) : (
            <div className={`header__account ${ isBurgerMenuOpen ? "header__account_opened" : "" }`}>
            
            <Navigation />
            <Link to="/profile" className="header__user base-link">
              Аккаунт
              <img src={profileIcon} alt="Иконка аккаунта" className="header__user-icon"/>
            </Link>
          </div>
          )}
          {/* <button className="header__burger base-button" type="button" id="burgerButton">
            <span className="header__burger-line"></span>
          </button> */}
            {isHomePage ? ( false) : (
          <button className={`header__burger ${ isBurgerMenuOpen ? "header__burger_active" : "" }`} type="button" onClick={toggleBurgerMenu}>
            <span className={`header__burger-line ${ isBurgerMenuOpen ? "header__burger-line_active" : "" }`}></span>
          </button> 
          )}
          
        </div>
      </div>
    </header>
  );
};

export default Header;
