import React from "react";
import "./Portfolio.css";
import arrowimage from "../../images/arrow-icon.svg";

const Portfolio = () => {
  return (
    <section className="section portfolio">
      <div className="container section__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__lists base-list">
          <li className="portfolio__list">
            <a href="https://s-bezrukov.github.io/how-to-learn/index.html" className="portfolio__link base-link" target="_blank" rel="noopener noreferrer">
              Статичный сайт
              <img src={arrowimage} alt="Иконка стрелочки" className="portfolio__icon"/>
            </a>
          </li>
          <li className="portfolio__list">
            <a href="https://s-bezrukov.github.io/russian-travel/index.html" className="portfolio__link base-link" target="_blank" rel="noopener noreferrer">
              Адаптивный сайт
              <img src={arrowimage} alt="Иконка стрелочки" className="portfolio__icon"/>
            </a>
          </li>
          <li className="portfolio__list">
            <a href="https://s-bezrukov.github.io/mesto/index.html" className="portfolio__link base-link" target="_blank" rel="noopener noreferrer">
              Одностраничное приложение
              <img src={arrowimage} alt="Иконка стрелочки" className="portfolio__icon"/>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
