import React from "react";
import "./SearchForm.css";

const SearchForm = () => {
  return (
    <form className="search" name="search">
      <div className="search__label">
        <input type="text" className="search__input base-input" required name="search-input" placeholder="Фильм"/>
        <button className="search__button base-button base-button_type_primary" type="button">Поиск</button>
      </div>
      <div className="search__label search__label-checkbox">
        <input type="checkbox" className="search__checkbox-input" name="search-checkbox" value="check" defaultChecked/>
        <span className="search__checkbox"></span>
        Короткометражки
      </div>
    </form>
  );
};

export default SearchForm;
