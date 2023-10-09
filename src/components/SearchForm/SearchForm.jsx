import React from "react";
import "./SearchForm.css";
import { useLocation } from "react-router-dom";

const SearchForm = ({
  values,
  isValid,
  errors,
  onSearch,
  handleChangeSearchInput,
  handleChangeCheckbox,
  isChecked,
}) => {
  const { pathname } = useLocation();

  const isErrorText = (text) => {
    return text ? "Нужно ввести ключевое слово" : "Фильм";
  };

  const isErrorClassName = (error) => {
    return error ? "search-form__input_type_error" : "";
  };

  return (
    <form 
      className="search" 
      name="search"
      onSubmit={onSearch}
      noValidate
    >
      <label className="search__label">
        <input
          type="text"
          className={`search__input ${
            pathname === "/movies"
              ? isErrorClassName(errors.searchMoviesValue)
              : isErrorClassName(errors.searchSaveMoviesValue)
          } base-input`}
          placeholder={
            pathname === "/movies"
              ? isErrorText(errors.searchMoviesValue)
              : isErrorText(errors.searchSaveMoviesValue)
          }
          name={
            pathname === "/movies"
              ? "searchMoviesValue"
              : "searchSaveMoviesValue"
          }
          required
          defaultValue={values}
          onChange={handleChangeSearchInput}
        />
        <button
          className={`search__button base-button ${
            !isValid ? "base-button_disabled" : ""
          } base-button_type_primary`}
          type="submit"
          disabled={!isValid}
        >
          Поиск
        </button>
      </label>
      <label className="search__label search__label-checkbox">
        <input
          type="checkbox"
          className="search__checkbox-input"
          name="searchCheckbox"
          onChange={handleChangeCheckbox}
          checked={isChecked}
        />
        <span
          className={`search__checkbox ${
            isChecked ? "search__checkbox_checked" : ""
          }`}
        ></span>
        Короткометражки
      </label>
    </form>
  );
};

export default SearchForm;
