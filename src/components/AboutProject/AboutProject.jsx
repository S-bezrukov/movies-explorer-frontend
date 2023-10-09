import React from "react";
import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section className="section project" id="project">
      <div className="container section__container">
        <h2 className="section__title project__about">О проекте</h2>
        <div className="project__content">
          <h3 className="project__title">Дипломный проект включал 5 этапов</h3>
          <h3 className="project__title">На выполнение диплома ушло 5 недель</h3>
          <p className="project__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          <p className="project__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
        <div className="project__time-line">
          <p className="project__line project__line_type_backend">1 неделя</p>
          <p className="project__line">4 недели</p>
          <span className="project__text">Back-end</span>
          <span className="project__text">Front-end</span>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
