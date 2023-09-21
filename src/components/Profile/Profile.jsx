import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <section className="profile">
      <div className="container">
        <div className="profile__block">
          <div className="profile__content">
            <h1 className="profile__title">Привет, Виталий!</h1>
            <ul className="profile__lists base-list">
              <li className="profile__list">
                <span className="profile__label">Имя</span>
                <span className="profile__text">Виталий</span>
              </li>
              <li className="profile__list">
                <span className="profile__label">E-mail</span>
                <span className="profile__text">pochta@yandex.ru</span>
              </li>
            </ul>
          </div>
          <div className="profile__links">
            <a href="/signup" className="profile__link profile__link_type_edit base-button base-link">Редактировать</a>
            <a href="/" className="profile__link profile__link_type_exit base-button base-link">Выйти из аккаунта</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
