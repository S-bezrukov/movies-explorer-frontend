import React from "react";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="not-found">
      <div className="container">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__subtitle">Страница не найдена</p>
        <button 
          onClick={() => navigate(-1)}
          className="not-found__link base-link"
          type="button"
          >
          Назад
        </button>
      </div>
    </section>
  );
};

export default NotFound;
