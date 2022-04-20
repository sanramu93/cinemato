import { useState, useEffect, useRef } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { getMovies, getMovieGenres, getImage } from "./apis/tmdbAPI";

import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu/SideMenu";

import HomePage from "./components/pages/HomePage/HomePage";
import MoviePage from "./components/pages/MoviePage/MoviePage";
import ActorPage from "./components/pages/ActorPage/ActorPage";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [allGenres, setAllGenres] = useState([]);
  const [category, setCategory] = useState("popular");
  const [genreId, setGenreId] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuToggle, setShowMenuToggle] = useState(true);
  const [showMenuOverlay, setShowMenuOverlay] = useState(false);

  const inputRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    const containers = document.querySelectorAll(".container");
    containers.forEach((cont) => cont.scrollTo(0, 0));
  };

  const resetFilters = () => {
    setCategory("");
    setGenreId(0);
    setSearchTerm("");
    setPage(1);
    inputRef.current.value = "";
    scrollToTop();
  };

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const toggleShowMenu = () => {
    setShowMenu((prevShow) => !prevShow);
    setShowMenuOverlay(true);
  };

  const disableScroll = (bool) => {
    return bool
      ? document.body.classList.add("scroll-disabled")
      : document.body.classList.remove("scroll-disabled");
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    const term = e.target[0].value;
    if (!term) return;
    resetFilters();
    setSearchTerm(term);
    inputRef.current.value = term;
  };

  const changeCategory = (categoryName) => {
    resetFilters();
    setCategory(categoryName);
    if (window.innerWidth < 800) setShowMenu(false);
  };

  const changeGenre = (genreName) => {
    resetFilters();
    setGenreId(allGenres.find((gen) => gen.name === genreName).id);
    if (window.innerWidth < 800) setShowMenu(false);
  };

  const handleOverlayClick = () => {
    if (window.innerWidth < 800) setShowMenu(false);
  };

  const handleNextPage = () => {
    setPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  const handlePrevPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  useEffect(() => {
    showMenu ? disableScroll(true) : disableScroll(false);
  }, [showMenu]);

  useEffect(() => {
    const getData = async () => {
      const data = await getMovieGenres();
      setAllGenres(data.genres);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const data = await getMovies(category, genreId, searchTerm, page);
      setTotalPages(data.total_pages);
      setMovies(
        data.results.map((result) => {
          return {
            ...result,
            posterUrl: getImage(result.poster_path, 500),
            backdropUrl: getImage(result.backdrop_path, 1280),
          };
        })
      );
    };
    getData();
    scrollToTop();
  }, [page, category, genreId, searchTerm]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setShowMenu(true);
        setShowMenuOverlay(false);
        setShowMenuToggle(false);
        disableScroll(false);
      } else {
        setShowMenu(false);
        setShowMenuToggle(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`body ${darkMode ? "dark" : ""}`}>
      <Router>
        <Header
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
          toggleShowMenu={toggleShowMenu}
          showMenu={showMenu}
          showMenuToggle={showMenuToggle}
          showMenuOverlay={showMenuOverlay}
          handleSearchSubmit={handleSearchSubmit}
          searchTerm={searchTerm}
          inputRef={inputRef}
          handleOverlayClick={handleOverlayClick}
        />
        <SideMenu
          darkMode={darkMode}
          changeCategory={changeCategory}
          allGenres={allGenres}
          changeGenre={changeGenre}
          showMenu={showMenu}
        />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                darkMode={darkMode}
                changeCategory={changeCategory}
                allGenres={allGenres}
                changeGenre={changeGenre}
                showMenu={showMenu}
                toggleShowMenu={toggleShowMenu}
                handleSearchSubmit={handleSearchSubmit}
                searchTerm={searchTerm}
                movies={movies}
                totalPages={totalPages}
                page={page}
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              />
            }
          />
          <Route
            path="/movie/:movieId"
            element={
              <MoviePage
                changeCategory={changeCategory}
                allGenres={allGenres}
                changeGenre={changeGenre}
                showMenu={showMenu}
                toggleShowMenu={toggleShowMenu}
                handleSearchSubmit={handleSearchSubmit}
              />
            }
          />
          <Route
            path="/actors/:actorId"
            element={
              <ActorPage
                changeCategory={changeCategory}
                allGenres={allGenres}
                changeGenre={changeGenre}
                showMenu={showMenu}
                toggleShowMenu={toggleShowMenu}
                handleSearchSubmit={handleSearchSubmit}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
