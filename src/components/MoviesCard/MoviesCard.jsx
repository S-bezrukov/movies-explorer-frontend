import React from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import cardImage from "../../images/card-image.jpg";
import closeIcon from "../../images/close-icon.svg";
import checkIcon from "../../images/check-icon.svg";

const MoviesCard = () => {
  const location = useLocation();
  const isMoviesRoute = location.pathname === "/movies";
  const isSavedMoviesRoute = location.pathname === "/saved-movies";
  return (
    <>
    {isMoviesRoute && (
      <>
      <article className="movies-card">
        <div className="movies-card__top">
          <h2 className="movies-card__title">В погоне за Бенкси</h2>
          <p className="movies-card__time">0ч 42м</p>
        </div>
        <div className="movies-card__middle">
          <img src={cardImage} alt="В погоне за Бенкси" className="movies-card__image"/>
        </div>
        <div className="movies-card__bottom">
          <button className="movies-card__button base-button_type_dark base-button" type="button">Сохранить
            {/* <img src={closeIcon} alt="Иконка крестика" className="movies-card__button-icon"/> */}
            {/* <img src={checkIcon} alt="Иконка галочки" className="movies-card__button-icon"/> */}
          </button>
        </div>
      </article>
      <article className="movies-card">
        <div className="movies-card__top">
          <h2 className="movies-card__title">В погоне за Бенкси</h2>
          <p className="movies-card__time">0ч 42м</p>
        </div>
        <div className="movies-card__middle">
          <img src={cardImage} alt="В погоне за Бенкси" className="movies-card__image"/>
        </div>
        <div className="movies-card__bottom">
          <button className="movies-card__button base-button_type_dark base-button" type="button">
            {/* <img src={closeIcon} alt="Иконка крестика" className="movies-card__button-icon"/> */}
            <img src={checkIcon} alt="Иконка галочки" className="movies-card__button-icon"/>
          </button>
        </div>
      </article>
      <article className="movies-card">
        <div className="movies-card__top">
          <h2 className="movies-card__title">В погоне за Бенкси</h2>
          <p className="movies-card__time">0ч 42м</p>
        </div>
        <div className="movies-card__middle">
          <img src={cardImage} alt="В погоне за Бенкси" className="movies-card__image"/>
        </div>
        <div className="movies-card__bottom">
          <button className="movies-card__button base-button_type_dark base-button" type="button">Сохранить
            {/* <img src={closeIcon} alt="Иконка крестика" className="movies-card__button-icon"/> */}
            {/* <img src={checkIcon} alt="Иконка галочки" className="movies-card__button-icon"/> */}
          </button>
        </div>
      </article>
      <article className="movies-card">
        <div className="movies-card__top">
          <h2 className="movies-card__title">В погоне за Бенкси</h2>
          <p className="movies-card__time">0ч 42м</p>
        </div>
        <div className="movies-card__middle">
          <img src={cardImage} alt="В погоне за Бенкси" className="movies-card__image"/>
        </div>
        <div className="movies-card__bottom">
          <button className="movies-card__button base-button_type_dark base-button" type="button">Сохранить
            {/* <img src={closeIcon} alt="Иконка крестика" className="movies-card__button-icon"/> */}
            {/* <img src={checkIcon} alt="Иконка галочки" className="movies-card__button-icon"/> */}
          </button>
        </div>
      </article>
    </>
    )}
    {isSavedMoviesRoute && (
      <>
      <article className="movies-card">
        <div className="movies-card__top">
          <h2 className="movies-card__title">Трон</h2>
          <p className="movies-card__time">1ч 20м</p>
        </div>
        <div className="movies-card__middle">
          <img src={cardImage} alt="В погоне за Бенкси" className="movies-card__image"/>
        </div>
        <div className="movies-card__bottom">
          <button className="movies-card__button base-button_type_dark base-button" type="button">
            <img src={closeIcon} alt="Иконка крестика" className="movies-card__button-icon"/>
            {/* <img src={checkIcon} alt="Иконка галочки" className="movies-card__button-icon"/> */}
          </button>
        </div>
      </article>
      <article className="movies-card">
        <div className="movies-card__top">
          <h2 className="movies-card__title">Трон</h2>
          <p className="movies-card__time">1ч 20м</p>
        </div>
        <div className="movies-card__middle">
          <img src={cardImage} alt="В погоне за Бенкси" className="movies-card__image"/>
        </div>
        <div className="movies-card__bottom">
          <button className="movies-card__button base-button_type_dark base-button" type="button">
            <img src={closeIcon} alt="Иконка крестика" className="movies-card__button-icon"/>
            {/* <img src={checkIcon} alt="Иконка галочки" className="movies-card__button-icon"/> */}
          </button>
        </div>
      </article>
      <article className="movies-card">
        <div className="movies-card__top">
          <h2 className="movies-card__title">Трон</h2>
          <p className="movies-card__time">1ч 20м</p>
        </div>
        <div className="movies-card__middle">
          <img src={cardImage} alt="В погоне за Бенкси" className="movies-card__image"/>
        </div>
        <div className="movies-card__bottom">
          <button className="movies-card__button base-button_type_dark base-button" type="button">
            <img src={closeIcon} alt="Иконка крестика" className="movies-card__button-icon"/>
            {/* <img src={checkIcon} alt="Иконка галочки" className="movies-card__button-icon"/> */}
          </button>
        </div>
      </article>
      </>
    )}
    </>
  );
};

export default MoviesCard;
