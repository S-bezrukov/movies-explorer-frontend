import React from "react";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Profile = ({
  onSignOut,
  onEditProfile,
  isEditProfile,
  setIsEditProfile,
  handleChange,
  values,
  errors,
  isValid,
  isSubmitLoading,
  setValues,
}) => {
  const currentUser = React.useContext(CurrentUserContext);
  const [isUserData, setIsUserData] = React.useState(true);

  React.useEffect(() => {
    if (currentUser) {
      setValues({ name: currentUser.name, email: currentUser.email });
    }
  }, [currentUser.name, currentUser.email]);

  React.useEffect(() => {
    if (
      values.name === currentUser.name ||
      values.email === currentUser.email
    ) {
      setIsUserData(true);
    } else {
      setIsUserData(false);
    }
  }, [values.name, values.email, currentUser.name, currentUser.email]);

  const openProfileEdit = () => {
    setTimeout(() => {
      setIsEditProfile(true);
    }, 0);
  };

  return (
    <section className="profile">
      <div className="container">
        <form className="profile__block" onSubmit={onEditProfile}>
          <div className="profile__content">
            <h1 className="profile__title">Привет, {currentUser.name}!</h1>
            <ul className="profile__lists base-list">
              <li className="profile__list">
                <span className="profile__label">Имя</span>
                <input
                  type="text"
                  name="name"
                  className={`profile__input ${
                    isEditProfile ? "profile__input_visible" : ""
                  } ${errors.name ? "profile__input_type_error" : ""} ${
                    isSubmitLoading ? "base-input_disabled" : ""
                  } base-input`}
                  placeholder="Имя"
                  onChange={handleChange}
                  defaultValue={currentUser.name}
                  minLength="2"
                  maxLength="30"
                  required
                  pattern="^[А-ЯЁа-яёA-Za-z -]+$"
                  disabled={isSubmitLoading}
                />
                <span className="profile__error">
                  {errors.name &&
                    "Это поле должно содержать только латиницу, кириллицу, пробел или дефис."}
                </span>
              </li>
              <li className="profile__list">
                <span className="profile__label">E-mail</span>
                <input
                  type="text"
                  name="email"
                  className={`profile__input ${
                    isEditProfile ? "profile__input_visible" : ""
                  } ${errors.email ? "profile__input_type_error" : ""}  ${
                    isSubmitLoading ? "base-input_disabled" : ""
                  } base-input`}
                  placeholder="E-mail"
                  onChange={handleChange}
                  defaultValue={currentUser.email}
                  required
                  pattern="^\S+@\S+\.\S+$"
                  disabled={isSubmitLoading}
                />
                <span className="profile__error">{errors.email}</span>
              </li>
            </ul>
          </div>
          <div className="profile__links">

          {isEditProfile ? (
              <button
                className={`profile__link profile__link_type_edit base-button ${
                  !isValid || isSubmitLoading || !isUserData
                    ? "base-button_disabled"
                    : ""
                }  base-link`}
                type="submit"
                disabled={!isValid || isSubmitLoading || !isUserData}
              >
                Сохранить
              </button>
            ) : (
              <button
                className="profile__link profile__link_type_edit base-button base-link"
                type="button"
                onClick={openProfileEdit}
              >
                Редактировать
              </button>
            )}
            
            <button
              className="profile__link profile__link_type_exit base-button base-link"
              type="button"
              onClick={onSignOut}
            >
              Выйти из аккаунта
            </button>

          </div>
        </form>
      </div>
    </section>
  );
};

export default Profile;
