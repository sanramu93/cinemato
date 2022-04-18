import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { getMovies, getMovieGenres, getImage } from "./apis/tmdbAPI";

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
    setSearchTerm("");
    setPage(1);
    inputRef.current.value = "";
    window.scrollTo(0, 0);
  };

  const disableScroll = (bool) => {
    return bool
      ? document.body.classList.remove("scroll-disabled")
      : document.body.classList.add("scroll-disabled");
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
    setShowMenu(false);
    disableScroll(true);
  };

  const changeGenre = (genreName) => {
    resetFilters();
    setGenreId(allGenres.find((gen) => gen.name === genreName).id);
    setShowMenu(false);
    disableScroll(true);
  };

  const toggleShowMenu = () => {
    setShowMenu((prevShow) => !prevShow);
    disableScroll(false);
  };

  const handleOverlayClick = () => {
    setShowMenu(false);
    disableScroll(false);
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
      <Router>
        {/* {showMenu ? <Overlay handleOverlayClick={handleOverlayClick} /> : null} */}
        <Header
          toggleShowMenu={toggleShowMenu}
          showMenu={showMenu}
          handleSearchSubmit={handleSearchSubmit}
          searchTerm={searchTerm}
          inputRef={inputRef}
          handleOverlayClick={handleOverlayClick}
        />
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
    </>
  );
}
