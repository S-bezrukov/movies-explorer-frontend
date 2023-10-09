import React from "react";
import { HashLink } from 'react-router-hash-link';
import "./Promo.css";

const Promo = () => {
  return (
    <section className="section promo">
      <div className="section__container promo__container">
        <div className="promo__content">
          <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
          <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <HashLink smooth to='#project' className="promo__link base-link">Узнать больше</HashLink>
        </div>
        <div className="promo__image"></div>
      </div>
    </section>
  );
};

export default Promo;
