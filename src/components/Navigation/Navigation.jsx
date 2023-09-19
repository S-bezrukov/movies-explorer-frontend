import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__menu base-list">
        <li className="navigation__item">
          <Link to="/" className="navigation__link main-link">Главная</Link>
        </li>
        <li className="navigation__item">
          <Link to="/movies" className="navigation__link navigation__link_active base-link">Фильмы</Link>
        </li>
        <li className="navigation__item">
          <Link to="/saved-movies" className="navigation__link base-link">Сохранённые фильмы</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
