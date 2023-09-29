import React from "react";
import "./AboutMe.css";
import Photo from "../../images/photo.png";

const AboutMe = () => {
  return (
    <section className="section about" id="about">
      <div className="container section__container">
        <h2 className="section__title about__title">Студент</h2>
        <div className="about__block">
          <div className="about__content">
            <h3 className="about__name">Сергей</h3>
            <h4 className="about__subtitle">Фронтенд-разработчик, 39 лет</h4>
            <p className="about__description">Я родился и живу в Воронеже, закончил факультет графического дизайна ВГЛТА. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКВ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <a href="https://github.com/S-bezrukov" className="about__link base-link" target="_blank" rel="noopener noreferrer">Github</a>
          </div>
          <img src={Photo} alt="Фото студента" className="about__image" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
