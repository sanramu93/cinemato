import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { getMovies, getMovieGenres, getImage } from "./apis/tmdbAPI";

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

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    setSearchTerm(e.target[0].value);
    setCategory("");
    setGenreId(0);
  };

  const changeCategory = (e) => {
    setCategory(e.target.name);
    setGenreId(0);
    setSearchTerm("");
  };

  const changeGenre = (e) => {
    setGenreId(allGenres.find((genre) => genre.name === e.target.name).id);
    setCategory("");
    setSearchTerm("");
  };

  const toggleShowMenu = () => {
    setShowMenu((prevShow) => !prevShow);
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
    <Router>
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
  );
}
