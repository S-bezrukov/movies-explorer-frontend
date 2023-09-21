import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = () => {
  const location = useLocation();
  const isMoviesRoute = location.pathname === "/movies";
  return (
    <section className="movies-cards" aria-label="Список с фильмами">
      <div className="movies-cards__list">
        <MoviesCard />
      </div>
      {/* <p className="movies-cards__not-found">Фильм не найден :(</p> */}
      {isMoviesRoute && (
        <button className="movies-cards__button base-button_type_dark-active base-button" type="button">Ещё</button>
      )}
    </section>
  );
};

export default MoviesCardList;
