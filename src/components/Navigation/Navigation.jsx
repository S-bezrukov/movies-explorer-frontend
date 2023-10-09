import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ closeBurgerMenu }) => {
  return (
    <nav className="navigation" id="navMenu">
      <ul className="navigation__menu base-list">
        <li className="navigation__item">
          <NavLink 
            to="/" 
            className={({ isActive }) =>`navigation__link ${
                isActive ? "navigation__link_active" : ""
              } base-link`
            }
            onClick={closeBurgerMenu}
          >
          Главная
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink 
            to="/movies"
            className={({ isActive }) =>
            `navigation__link base-link ${
                isActive ? "navigation__link_active" : ""
              } base-link`
            }
            onClick={closeBurgerMenu}
          >
          Фильмы
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink 
            to="/saved-movies"
            className={({ isActive }) =>
            `navigation__link base-link ${
              isActive ? "navigation__menu-link_active" : ""
            } main-link`
          }
          onClick={closeBurgerMenu}
          >
          Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
