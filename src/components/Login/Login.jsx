import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";

const Login = ({
  values,
  handleChange,
  onLogin,
  errors,
  isValid,
  isSubmitLoading,
  loggedIn,
}) => {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  return (
    <section className="auth">
      <span className="logo auth__logo">
      <Link to="/" className=""><img src={logo} alt="" className="logo__image" /></Link>
      </span>
      <h1 className="auth__title">Рады видеть!</h1>
      <form name="register-form" className="auth__form" onSubmit={onLogin}>
        <label className="auth__form-label">
          <span className="auth__form-text">E-mail</span>
          <input 
            type="email" 
            className={`auth__input base-input ${
              errors.email ? "auth__input_type_error" : ""
            } ${isSubmitLoading ? "base-input_disabled" : ""} base-input`}
            name="email"
            required
            onChange={handleChange}
            defaultValue={values.email}
            pattern="^\S+@\S+\.\S+$"
          />
          <span className="auth__form-error">{errors.email}</span>
        </label>
        <label className="auth__form-label">
          <span className="auth__form-text">Пароль</span>
          <input 
            type="password" 
            className={`auth__input base-input ${
              errors.password ? "auth__input_type_error" : ""
            } ${isSubmitLoading ? "base-input_disabled" : ""} base-input`}
            name="password"
            required
            onChange={handleChange}
            defaultValue={values.password}
          />
          <span className="auth__form-error">{errors.password}</span>
        </label>

        <button 
        type="submit"
        className={`auth__form-button base-button base-button_type_primary ${
          !isValid || isSubmitLoading ? "base-button_disabled" : ""
        }`}
        disabled={!isValid || isSubmitLoading}
        >Войти
        </button>

      </form>
      <p className="auth__text">
        Ёще не зарегистрированы?{" "}
        <Link to="/signup" className="auth__link base-link">Регистрация</Link>
      </p>
    </section>
  );
};

export default Login;