import { Route, Routes} from "react-router-dom";
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

const App = () => {

  return (
    <div className="App">
      <main className="content">
        <Routes>
          {/* Главная страница */}
          <Route path="/" element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          } />
          {/* Страница фильмов */}
          <Route path="/movies" element={
            <>
              <Header />
              <Movies />
              <Footer />
            </>
          } />
          {/* Страница сохраненных фильмов */}
          <Route path="/saved-movies" element={
            <>
              <Header />
              <SavedMovies />
              <Footer />
            </>
          } />
          {/* Страница регистрации */}
          <Route path="/signup" element={<Register />} />
          {/* Страница входа */}
          <Route path="/signin" element={<Login />} />
          {/* Страница профиля */}
          <Route path="/profile" element={
            <>
              <Header />
              <Profile />
            </>
          } />
          {/* Страница 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
