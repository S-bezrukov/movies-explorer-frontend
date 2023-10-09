import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__block">
          <p className="footer__copy">&copy; 2023</p>
          <div className="footer__nav">
            <ul className="footer__lists base-list">
              <li className="footer__list">
                <a href="https://practicum.yandex.ru" className="footer__link base-link" target="_blank" rel="noopener noreferrer">Яндекс.Практикум</a>
              </li>
              <li className="footer__list">
                <a href="https://github.com/S-bezrukov" className="footer__link base-link" target="_blank" rel="noopener noreferrer">Github</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
