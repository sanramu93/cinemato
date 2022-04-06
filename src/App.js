import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { getMovies, getMovieGenres, getMoviePosterUrl } from "./apis/tmdbAPI";

import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import "./App.css";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("popular");
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [allGenres, setAllGenres] = useState([]);
  const [genreId, setGenreId] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    setSearchTerm(e.target[0].value);
  };

  const toggleShowMenu = () => {
    setShowMenu((prevShow) => !prevShow);
  };

  const changeCategory = (e) => {
    setCategory(e.target.name);
    setGenreId(0);
  };

  const changeGenre = (e) => {
    setGenreId(allGenres.find((genre) => genre.name === e.target.name).id);
    setCategory("");
  };

  const nextPage = () => {
    setPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  const prevPage = () => {
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
            posterUrl: getMoviePosterUrl(result.poster_path),
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
              prevPage={prevPage}
              nextpage={nextPage}
            />
          }
        />
        <Route
          path="/movie/:id"
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
      </Routes>
    </Router>
  );
}
