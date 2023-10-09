import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useEffect, useState } from 'react'
import Preloader from "../Preloader/Preloader";
import {
  MaxScreen,
  MediumScreen,
  SmallScreen,
  InitMoreMaxScreen,
  InitLessMaxScreen,
  InitMediumScreen,
  InitSmallScreen,
  StepMaxScreen,
  StepMediumScreen,
  StepSmallScreen
} from "../../utils/constants";

const MoviesCardList = ({
  movies,
  savedMovie,
  onSaveMovie,
  isLoading,
  openDeletePopup,
  renderMovie,
  isSubmitLoading,
}) => {

  const { pathname } = useLocation();
  const [count, setCount] = useState('')
  const fact = movies ? movies.slice(0, count) : [];

  function printCards() {
    const counter = { init: InitMoreMaxScreen, step: StepMaxScreen }
    if (window.innerWidth < MaxScreen) {
      counter.init = InitLessMaxScreen
      counter.step = StepMediumScreen
    }
    if (window.innerWidth < MediumScreen) {
      counter.init = InitMediumScreen
      counter.step = StepSmallScreen
    }
    if (window.innerWidth < SmallScreen) {
      counter.init = InitSmallScreen
      counter.step = StepSmallScreen
    }
    return counter
  }

  useEffect(() => {
    if (pathname === '/movies') {
      setCount(printCards().init)
      function printCardsForResize() {
        if (window.innerWidth >= StepMaxScreen) {
          setCount(printCards().init)
        }
        if (window.innerWidth < StepMaxScreen) {
          setCount(printCards().init)
        }
        if (window.innerWidth < MediumScreen) {
          setCount(printCards().init)
        }
        if (window.innerWidth < SmallScreen) {
          setCount(printCards().init)
        }
      }
      window.addEventListener('resize', printCardsForResize)
      return () => window.removeEventListener('resize', printCardsForResize)
    }
  }, [pathname, movies])

  function clickMore() {
    setCount(count + printCards().step)
  }

  return (
    <section className="movies-cards" aria-label="Список с фильмами">
      {isLoading ? (
        <Preloader />
      ) : pathname === "/movies" && movies ? (
        movies.length > 0 ? (
          <>
            <div className="movies-cards__list">
              {fact.map((movie) => (
                <MoviesCard
                  movie={movie}
                  key={movie.id}
                  onSaveMovie={onSaveMovie}
                  openDeletePopup={openDeletePopup}
                  isSubmitLoading={isSubmitLoading}
                />
              ))}
            </div>

            {fact.length < movies.length && (
              <button className="movies-cards__button base-button_type_dark-secondary base-button" type="button" onClick={clickMore}>
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
