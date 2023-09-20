import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

const Login = () => {
  return (
    <section className="auth">
      <span className="logo auth__logo">
      <Link to="/" className=""><img src={logo} alt="" className="logo__image" /></Link>
      </span>
      <h2 className="auth__title">Рады видеть!</h2>
      <form name="register-form" className="auth__form">
        <label className="auth__form-label">
          <span className="auth__form-text">E-mail</span>
          <input type="email" className="auth__form-input base-input" name="email" required/>
        </label>
        <label className="auth__form-label">
          <span className="auth__form-text">Пароль</span>
          <input type="password" className="auth__form-input base-input" name="password" required/>
        </label>
        <a href="/movies" type="button" className="auth__form-button base-button base-button_type_primary">Войти</a>
      </form>
      <p className="auth__text">
        Ёще не зарегистрированы?{" "}
        <Link to="/signup" className="auth__link base-link">Регистрация</Link>
      </p>
    </section>
  );
};

export default Login;
