import React from "react";
import "./InfoTooltip.css";
// import successIcon from "../../images/check-icon.svg";
import errorIcon from "../../images/close-icon.svg";

const InfoTooltip = () => {
  return (
    <div className="tooltip">
      <div className="tooltip__block">
        <button className="tooltip__close-button base-button" type="button"></button>
        <img src={errorIcon} alt="Иконка крестика" className="tooltip__icon tooltip__icon_type_error"/>
        <h2 className="tooltip__title tooltip__title_type_error">Что-то пошло не так! Попробуйте ещё раз.</h2>
      </div>
    </div>
  );
};

export default InfoTooltip;
