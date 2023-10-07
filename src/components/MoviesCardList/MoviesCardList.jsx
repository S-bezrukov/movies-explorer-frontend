import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

const MoviesCardList = ({
  movies,
  savedMovie,
  onSaveMovie,
  isLoading,
  openDeletePopup,
  renderMovie,
  onclickLoadMore,
  isSubmitLoading,
}) => {

  const { pathname } = useLocation();

  return (
    <section className="movies-cards" aria-label="Список с фильмами">
      {isLoading ? (
        <Preloader />
      ) : pathname === "/movies" && movies ? (
        movies.length > 0 ? (
          <>
            <div className="movies-cards__list">
              {movies.slice(0, renderMovie).map((movie) => (
                <MoviesCard
                  movie={movie}
                  key={movie.id}
                  onSaveMovie={onSaveMovie}
                  openDeletePopup={openDeletePopup}
                  isSubmitLoading={isSubmitLoading}
                />
              ))}
            </div>
            {movies.length > renderMovie && (
              <button
                className="movies-cards__button base-button_type_dark-secondary base-button"
                type="button"
                onClick={onclickLoadMore}
              >
                Ещё
              </button>
            )}
          </>
        ) : (
          <p className="movies-cards__not-found">Ничего не найдено:</p>
        )
      ) : pathname === "/saved-movies" && savedMovie && savedMovie.length > 0 ? (
        <div className="movies-cards__list">
          {savedMovie.map((movie) => (
            <MoviesCard
              movie={movie}
              key={movie.movieId}
              onSaveMovie={onSaveMovie}
              openDeletePopup={openDeletePopup}
              isSubmitLoading={isSubmitLoading}
            />
          ))}
        </div>
      ) : (
        pathname === "/saved-movies" && savedMovie && savedMovie.length === 0 && (
          <p className="movies-cards__not-found">Ничего не найдено:</p>
        )
      )}
    </section>
  );
};

export default MoviesCardList;
