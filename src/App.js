import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { getMovies, getMovieGenres, getImage } from "./apis/tmdbAPI";

import Overlay from "./components/Overlay/Overlay";
import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu/SideMenu";
import HomePage from "./pages/HomePage/HomePage";
import MoviePage from "./pages/MoviePage/MoviePage";
import ActorPage from "./pages/ActorPage/ActorPage";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [allGenres, setAllGenres] = useState([]);
  const [category, setCategory] = useState("popular");
  const [genreId, setGenreId] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const inputRef = useRef(null);

  const resetFilters = () => {
    setCategory("");
    setGenreId(0);
    setPage(1);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    resetFilters();
    setSearchTerm(e.target[0].value);
  };

  const changeCategory = (e) => {
    resetFilters();
    inputRef.current.value = "";
    setCategory(e.target.name);
    setShowMenu(false);
  };

  const changeGenre = (e) => {
    resetFilters();
    inputRef.current.value = "";
    setGenreId(allGenres.find((genre) => genre.name === e.target.name).id);
    setShowMenu(false);
    document.body.classList.remove("scroll-disabled");
  };

  const toggleShowMenu = () => {
    setShowMenu((prevShow) => !prevShow);
    document.body.classList.add("scroll-disabled");
  };

  const handleOverlayClick = () => {
    setShowMenu(false);
    document.body.classList.remove("scroll-disabled");
  };

  const handleNextPage = () => {
    setPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  const handlePrevPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

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

      // scroll to top
      window.scrollTo(0, 0);
    };
    getData();
  }, [page, category, genreId, searchTerm]);

  return (
    <>
      {showMenu ? <Overlay handleOverlayClick={handleOverlayClick} /> : null}
      <Header
        toggleShowMenu={toggleShowMenu}
        handleSearchSubmit={handleSearchSubmit}
        searchTerm={searchTerm}
        showSearch={true}
        inputRef={inputRef}
      />
      <Router>
        <SideMenu
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
                changeCategory={changeCategory}
                allGenres={allGenres}
                changeGenre={changeGenre}
                showMenu={showMenu}
                toggleShowMenu={toggleShowMenu}
                handleSearchSubmit={handleSearchSubmit}
                searchTerm={searchTerm}
                movies={movies}
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
    </>
  );
}
