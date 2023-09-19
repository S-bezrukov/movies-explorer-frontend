import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

const Register = () => {
  return (
    <section className="auth">
      <span className="logo auth__logo">
        <img src={logo} alt="" className="logo__image" />
      </span>
      <h2 className="auth__title">Добро пожаловать!</h2>
      <form name="register-form" className="auth__form">
        <label className="auth__form-label">
          <span className="auth__form-text">Имя</span>
          <input type="text" className="auth__form-input base-input" name="name" required/>
        </label>
        <label className="auth__form-label">
          <span className="auth__form-text">E-mail</span>
          <input type="email" className="auth__form-input base-input" name="email" required/>
        </label>
        <label className="auth__form-label">
          <span className="auth__form-text">Пароль</span>
          <input type="password" className="auth__form-input base-input auth__form-input_type_error" name="password" required />
          <span className="auth__form-error">Что-то пошло не так...</span>
        </label>
        <button type="button" className="auth__form-button base-button base-button_type_primary">Зарегистрироваться</button>
      </form>
      <p className="auth__text">
        Уже зарегистрированы?{" "}
        <Link to="/signin" className="auth__link base-link">Войти</Link>
      </p>
      <InfoTooltip />
    </section>
  );
};

export default Register;
