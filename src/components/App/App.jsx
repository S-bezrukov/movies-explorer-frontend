import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "./App.css";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import { checkToken, deleteSaveMovie, editProfile, getSaveMovies, login, register, saveMovie, signOut, } from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { BASE_URL, getMovies } from "../../utils/MoviesApi";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import DeleteMoviePopup from "../DeleteMoviePopup/DeleteMoviePopup";
import { DURATION_SHORT_FILM, LOADING_MOVIE_DESKTOP, RENDER_MOVIE_DESKTOP, } from "../../utils/constants";

const App = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { values, setValues, setIsValid, handleChange, errors, isValid, resetForm,} = useFormWithValidation();
  const allMovies = JSON.parse(localStorage.getItem("allMovies"));
  const saveMovies = JSON.parse(localStorage.getItem("saveMovies"));
  const searchMovies = JSON.parse(localStorage.getItem("searchMovies"));
  const searchSaveMovies = JSON.parse(localStorage.getItem("searchSaveMovies"));
  const [searchCheckboxIsChecked, setSearchCheckboxIsChecked] = React.useState(
    JSON.parse(localStorage.getItem("searchCheckboxIsChecked")) || false
  );
  const [searchSaveMoviesCheckboxIsChecked, setSearchSaveMoviesCheckboxIsChecked] = React.useState(
    JSON.parse(localStorage.getItem("searchSaveMoviesCheckboxIsChecked")) || false
  );
  const searchInputValue = localStorage.getItem("searchInputValue");
  const searchSaveMoviesInputValue = "";
  const loggedIn = localStorage.getItem("loggedIn") === "true";
  const [moviesIsChecked, setMoviesIsChecked] = React.useState(
    JSON.parse(localStorage.getItem("searchCheckboxIsChecked")) || false
  );
  const [saveMoviesIsChecked, setSaveMoviesIsChecked] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [movieId, setMovieId] = React.useState("");
  const [movies, setMovies] = React.useState([]);
  const [meSaveMovie, setMeSaveMovie] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isEditProfile, setIsEditProfile] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isOpenInfoTooltip, setIsOpenInfoTooltip] = React.useState(false);
  const [successText, setSuccessText] = React.useState("");
  const [errorText, setErrorText] = React.useState("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Попробуйте ещё раз");
  const [isLoadingButtonText, setIsLoadingButtonText] = React.useState(false);
  const [isOpenPopup, setIsOpenPopup] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [isSubmitLoading, setIsSubmitLoading] = React.useState(false);

  const filterMovieDuration = allMovies && allMovies.filter((movie) => moviesIsChecked
      ? movie.duration <= DURATION_SHORT_FILM
      : movie.duration
    );

  const filterSaveMovieDuration = saveMovies && saveMovies.filter((movie) => saveMoviesIsChecked
      ? movie.duration <= DURATION_SHORT_FILM
      : movie.duration
    );

  const filterFullMovies = allMovies && allMovies.filter((movie) => searchInputValue
      ? movie.nameRU.toLowerCase().includes(searchInputValue.toLowerCase()) && movie.duration <= DURATION_SHORT_FILM
      : movie.duration <= DURATION_SHORT_FILM
    );

  const filterSaveFullMovies = saveMovies && saveMovies.filter((movie) => searchSaveMoviesInputValue
      ? movie.nameRU
        .toLowerCase()
        .includes(searchSaveMoviesInputValue.toLowerCase()) && movie.duration <= DURATION_SHORT_FILM
      : movie.duration <= DURATION_SHORT_FILM
    );

  const filterShortMovies = allMovies && allMovies.filter((movie) => searchInputValue
      ? movie.nameRU.toLowerCase().includes(searchInputValue.toLowerCase()) 
      : true
    );

  const filterSaveShortMovies = saveMovies && saveMovies.filter((movie) => searchSaveMoviesInputValue
      ? movie.nameRU
        .toLowerCase()
        .includes(searchSaveMoviesInputValue.toLowerCase())
      : true
    );

  const signOutParameters = () => {
    localStorage.clear();
    setMeSaveMovie([]);
    navigate("/");
    resetForm();
    setIsEditProfile(false);
  };

  const hideInfo = () => {
    setTimeout(() => {
      setIsOpenInfoTooltip(false);
      setSuccessText("");
    }, 2000);
  };

  React.useEffect(() => {
    if (loggedIn) {
      getMySaveMovies();
    }

  }, [loggedIn, pathname]);

  const getMe = async () => {
    try {
      const data = await checkToken();
      if (data.data) {
        setCurrentUser(data.data);
        localStorage.setItem("loggedIn", true);
      }
    } catch (error) {
      signOutParameters();
      setIsSuccess(false);
      setIsOpenInfoTooltip(true);
      hideInfo();
    }
  };

  const getAllMovies = async () => {
    setIsLoading(true);
    try {
      const data = await getMovies();
      if (data) {
        setMovies(data);
        localStorage.setItem("allMovies", JSON.stringify(data));
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setMovies([]);
      setIsOpenInfoTooltip(true);
      hideInfo();
    }
  };

  const getMySaveMovies = async () => {
    setIsLoading(true);
    try {
      const data = await getSaveMovies();
      if (data) {
        setMeSaveMovie(data);
        localStorage.setItem("saveMovies", JSON.stringify(data));
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setMeSaveMovie([]);
      setIsOpenInfoTooltip(true);
      hideInfo();
    }
  };

  const handleRegisterSend = async (evt) => {
    evt.preventDefault();
    setIsSubmitLoading(true);
    try {
      const data = await register(values.name, values.email, values.password);
      if (data) {
        navigate("/movies");
        resetForm();
        setCurrentUser(data.user);
        localStorage.setItem("loggedIn", true);
        setIsSuccess(true);
        setSuccessText("Вы успешно зарегистрировались!");
      }
    } catch (error) {
      setIsSuccess(false);
      setErrorText(error);
    } finally {
      setIsSubmitLoading(false);
      setIsOpenInfoTooltip(true);
      hideInfo();
    }
  };

  const handleLoginSend = async (evt) => {
    evt.preventDefault();
    setIsSubmitLoading(true);
    try {
      const data = await login(values.email, values.password);
      if (data) {
        navigate("/movies");
        setCurrentUser(data.user);
        resetForm();
        localStorage.setItem("loggedIn", true);
        setIsSuccess(true);
        setSuccessText("Вы успешно авторизовались!");
      }
    } catch (error) {
      setIsSuccess(false);
      setErrorText(error);
    } finally {
      setIsSubmitLoading(false);
      setIsOpenInfoTooltip(true);
      hideInfo();
    }
  };

  const handleEditProfile = async (evt) => {
    evt.preventDefault();
    setIsSubmitLoading(true);
    try {
      const data = await editProfile(values.name, values.email);
      if (data.data) {
        setCurrentUser(data.data);
        setIsEditProfile(false);
        setSuccessText("Вы успешно изменили данные!");
        setIsSuccess(true);
        resetForm();
      }
    } catch (error) {
      setIsSuccess(false);
      setErrorText(error);
    } finally {
      setIsSubmitLoading(false);
      setIsOpenInfoTooltip(true);
      hideInfo();
    }
  };
  
  const handleSignOut = async () => {
    try {
      const { message } = await signOut();
      if (message) {
        signOutParameters();
        setIsSuccess(true);
      }
    } catch (error) {
      setIsSuccess(false);
    } finally {
      setIsOpenInfoTooltip(true);
      hideInfo();
    }
  };

  const postMovie = async (movie) => {
    setIsSubmitLoading(true);
    try {
      const data = await saveMovie({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${BASE_URL}/${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `${BASE_URL}/${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      });
      if (data) {
        const mov = [...saveMovies, data].filter((movie) => saveMoviesIsChecked
          ? movie.duration <= DURATION_SHORT_FILM
          : movie.duration > DURATION_SHORT_FILM
        );
        setMeSaveMovie(mov);
        localStorage.setItem("searchSaveMovies", JSON.stringify(mov));
        localStorage.setItem("saveMovies",JSON.stringify([...saveMovies, data]));
        setIsSuccess(true);
        setSuccessText("Фильм успешно сохранен!");
      }
    } catch (error) {
      setIsSuccess(false);
      setErrorText("Фильм не удалось сохранить!");
    } finally {
      setIsSubmitLoading(false);
      setIsOpenInfoTooltip(true);
      hideInfo();
    }
  };

  const handleMovieDelete = async (evt) => {
    evt.preventDefault();
    setIsLoadingButtonText(true);
    setIsSubmitLoading(true);
    try {
      const { message } = await deleteSaveMovie(movieId);
      if (message) {
        // Удаляем фильм с указанным movieId из массива saveMovies
        const updatedSaveMovies = saveMovies.filter((movie) => movie._id !== movieId);
        // Обновляем фильтрованный список сохраненных фильмов, если фильтры применены
        const filteredSaveMovies = saveMoviesIsChecked
          ? updatedSaveMovies.filter((movie) => movie.duration <= DURATION_SHORT_FILM)
          : updatedSaveMovies;
        setMeSaveMovie(filteredSaveMovies);
        // Проверяем, есть ли значение в инпуте фильтра
        if (values.searchSaveMoviesValue) {
          // Если значение есть, фильтруем фильмы с учетом фильтрации
          const searchAndFilterSaveMovies = filteredSaveMovies.filter((movie) =>
            saveMoviesIsChecked
              ? movie.duration <= DURATION_SHORT_FILM &&
                movie.nameRU.toLowerCase().includes(values.searchSaveMoviesValue.toLowerCase())
              : movie.nameRU.toLowerCase().includes(values.searchSaveMoviesValue.toLowerCase())
          );
          setMeSaveMovie(searchAndFilterSaveMovies);
          localStorage.setItem("searchSaveMovies", JSON.stringify(searchAndFilterSaveMovies));
        } else {
          // Если значение инпута пустое, отображаем все сохраненные фильмы
          localStorage.setItem("searchSaveMovies", JSON.stringify(filteredSaveMovies));
        }
        localStorage.setItem("saveMovies", JSON.stringify(updatedSaveMovies));
        setIsSuccess(true);
        setSuccessText(message);
        closeAllPopups();
      }
    } catch (error) {
      setIsSuccess(false);
      setErrorText(error);
    } finally {
      setIsSubmitLoading(false);
      setIsOpenInfoTooltip(true);
      hideInfo();
      setIsLoadingButtonText(false);
    }
  };

  const handleDeleteMovieClick = (id) => {
    setIsOpenPopup(!isOpenPopup);
    setMovieId(id);
  };

  const closeAllPopups = () => {
    setIsOpenPopup(false);
    setMovieId("");
  };

  const closeByOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      closeAllPopups();
    }
  };

  React.useEffect(() => {
    const closeByEscape = (evt) => {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    };

    if (isOpenPopup) {
      document.addEventListener("keydown", closeByEscape);
      return () => {
        document.removeEventListener("keydown", closeByEscape);
      };
    }
  }, [isOpenPopup]);

  const handleSearch = async (evt) => {
    evt.preventDefault();
    try {
      setIsValid(false);
      if (pathname === "/movies") {
        let searchAndFilterMovies;
        const localStorageMovies = JSON.parse(localStorage.getItem("allMovies"));
  
        if (!localStorageMovies) {
          // Выполняем запрос к базе фильмов только при первом поиске
          const data = await getAllMovies();
          searchAndFilterMovies = data.filter((movie) =>
            moviesIsChecked
              ? movie.duration <= DURATION_SHORT_FILM &&
                movie.nameRU
                  .toLowerCase()
                  .includes(values.searchMoviesValue.toLowerCase())
              : 
                movie.nameRU
                  .toLowerCase()
                  .includes(values.searchMoviesValue.toLowerCase())
          );
  
          setMovies(searchAndFilterMovies);
          localStorage.setItem(
            "searchMovies",
            JSON.stringify(searchAndFilterMovies)
          );
          localStorage.setItem("searchInputValue", values.searchMoviesValue);
        } else {
          // Используем фильмы из локального хранилища
          searchAndFilterMovies = localStorageMovies.filter((movie) =>
            moviesIsChecked
              ? movie.duration <= DURATION_SHORT_FILM &&
                movie.nameRU
                  .toLowerCase()
                  .includes(values.searchMoviesValue.toLowerCase())
              : 
                movie.nameRU
                  .toLowerCase()
                  .includes(values.searchMoviesValue.toLowerCase())
          );
  
          setMovies(searchAndFilterMovies);
          localStorage.setItem(
            "searchMovies",
            JSON.stringify(searchAndFilterMovies)
          );
          localStorage.setItem("searchInputValue", values.searchMoviesValue);
        }
      } else if (pathname === "/saved-movies") {
        // Обработка поиска сохраненных фильмов
        const searchAndFilterSaveMovies = meSaveMovie.filter((movie) =>
          saveMoviesIsChecked
            ? movie.duration <= DURATION_SHORT_FILM &&
              movie.nameRU
                .toLowerCase()
                .includes(values.searchSaveMoviesValue.toLowerCase())
            : 
              movie.nameRU
                .toLowerCase()
                .includes(values.searchSaveMoviesValue.toLowerCase())
        );
  
        setMeSaveMovie(searchAndFilterSaveMovies);
      }
    } catch (error) {
      setErrorText("Введите название фильма!");
      setIsOpenInfoTooltip(true);
      hideInfo();
    }
  };
 
  const handleChangeSearchInput = (evt) => {
    handleChange(evt);
    if (evt.target.value === "" && pathname === "/movies") {
      localStorage.removeItem("searchMovies");
      localStorage.removeItem("searchInputValue");
      setMovies(filterMovieDuration);
    } else if (evt.target.value === "" && pathname === "/saved-movies") {
      setMeSaveMovie(filterSaveMovieDuration);
    }
  };

  const handleChangeSearchCheckbox = (evt) => {
    if (evt.target.checked) {
      setMovies(filterFullMovies);
      localStorage.setItem("searchMovies", JSON.stringify(filterFullMovies));
      localStorage.setItem("searchCheckboxIsChecked", evt.target.checked);
      setMoviesIsChecked(evt.target.checked);
    } else {
      setMovies(filterShortMovies);
      localStorage.setItem("searchMovies", JSON.stringify(filterShortMovies));
      localStorage.setItem("searchCheckboxIsChecked", evt.target.checked);
      setMoviesIsChecked(evt.target.checked);
    }
  };

  const handleChangeSearchSaveMoviesCheckbox = (evt) => {
    if (evt.target.checked) {
      setMeSaveMovie(filterSaveFullMovies);
      localStorage.setItem( "searchSaveMovies", JSON.stringify(filterSaveFullMovies));
      localStorage.setItem("searchSaveMoviesCheckboxIsChecked", evt.target.checked);
      setSaveMoviesIsChecked(evt.target.checked);
    } else {
      setMeSaveMovie(filterSaveShortMovies);
      localStorage.setItem("searchSaveMovies",JSON.stringify(filterSaveShortMovies));
      localStorage.setItem("searchSaveMoviesCheckboxIsChecked", evt.target.checked);
      setSaveMoviesIsChecked(evt.target.checked);
    }
  };
  
  React.useEffect(() => {
    if (loggedIn && !searchInputValue) {
      setMovies(filterMovieDuration);
      localStorage.setItem("searchMovies", JSON.stringify(filterMovieDuration));
    }

    if (loggedIn && !searchSaveMoviesInputValue) {
      setMeSaveMovie(filterSaveMovieDuration);
    }

    if (loggedIn) {
      getMe();
    }

    setSaveMoviesIsChecked(false);
    
  }, [loggedIn, pathname]);

  React.useEffect(() => {
    if (searchMovies) {
      setMoviesIsChecked(searchCheckboxIsChecked);
      setMovies(searchMovies);
      setIsLoading(false);
    } else {
      setMovies(allMovies);
    }

    if (searchSaveMovies) {
      setSaveMoviesIsChecked(searchSaveMoviesCheckboxIsChecked);
      setMeSaveMovie(searchSaveMovies);
      setIsLoading(false);
    } else {
      setMeSaveMovie(filterSaveMovieDuration);
    }
  }, []);
  
  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        {pathname === "/" && <Header loggedIn={loggedIn} />}
        {pathname === "/movies" && <Header loggedIn={loggedIn} />}
        {pathname === "/saved-movies" && <Header loggedIn={loggedIn} />}
        {pathname === "/profile" && <Header loggedIn={loggedIn} />}
        <main className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/movies"
              element={
                <ProtectedRouteElement
                  element={Movies}
                  movies={movies}
                  savedMovie={meSaveMovie}
                  onSaveMovie={postMovie}
                  openDeletePopup={handleDeleteMovieClick}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  values={searchInputValue ? searchInputValue : values.searchMoviesValue}
                  isValid={isValid}
                  errors={errors}
                  onSearch={handleSearch}
                  handleChangeSearchInput={handleChangeSearchInput}
                  handleChangeCheckbox={handleChangeSearchCheckbox}
                  isChecked={moviesIsChecked}
                  isSubmitLoading={isSubmitLoading}
                  loggedIn={loggedIn}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRouteElement
                  element={SavedMovies}
                  savedMovie={meSaveMovie}
                  openDeletePopup={handleDeleteMovieClick}
                  setIsLoading={setIsLoading}
                  values={""}
                  isValid={isValid}
                  errors={errors}
                  onSearch={handleSearch}
                  handleChangeSearchInput={handleChangeSearchInput}
                  handleChangeCheckbox={handleChangeSearchSaveMoviesCheckbox}
                  isChecked={saveMoviesIsChecked}
                  isSubmitLoading={isSubmitLoading}
                  loggedIn={loggedIn}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <Register
                  values={values}
                  handleChange={handleChange}
                  onRegister={handleRegisterSend}
                  errors={errors}
                  isValid={isValid}
                  isSubmitLoading={isSubmitLoading}
                  loggedIn={loggedIn}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <Login
                  values={values}
                  handleChange={handleChange}
                  onLogin={handleLoginSend}
                  errors={errors}
                  isValid={isValid}
                  isSubmitLoading={isSubmitLoading}
                  loggedIn={loggedIn}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRouteElement
                  element={Profile}
                  onSignOut={handleSignOut}
                  onEditProfile={handleEditProfile}
                  isEditProfile={isEditProfile}
                  setIsEditProfile={setIsEditProfile}
                  handleChange={handleChange}
                  values={values}
                  errors={errors}
                  isValid={isValid}
                  isSubmitLoading={isSubmitLoading}
                  setValues={setValues}
                  loggedIn={loggedIn}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {pathname === "/" && <Footer />}
        {pathname === "/movies" && <Footer />}
        {pathname === "/saved-movies" && <Footer />}
        <InfoTooltip
          isOpenInfoTooltip={isOpenInfoTooltip}
          isSuccess={isSuccess}
          successText={successText}
          errorText={errorText}
        />
        <DeleteMoviePopup
          title="Вы точно хотите удалить сохраненый фильм?"
          buttonText={isLoadingButtonText ? "Удаление..." : "Удалить"}
          onSubmit={handleMovieDelete}
          isOpenPopup={isOpenPopup}
          onClose={closeAllPopups}
          onCloseOverlay={closeByOverlay}
          isSubmitLoading={isSubmitLoading}
        />
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
