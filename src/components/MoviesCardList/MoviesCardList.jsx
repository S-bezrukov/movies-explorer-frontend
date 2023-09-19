import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = () => {
  return (
    <section className="movies-cards" aria-label="Список с фильмами">
      <div className="movies-cards__list">
        <MoviesCard />
      </div>
      {/* <p className="movies-cards__not-found">Фильм не найден :(</p> */}
      <button className="movies-cards__button base-button_type_dark-active base-button" type="button">Ещё</button>
    </section>
  );
};

export default MoviesCardList;
