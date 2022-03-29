// API KEY: 8d64ceddb4fea0720e842857f6016db4

import { useState, useEffect } from "react";
import "./App.css";
import { getMovies, getMovieGenres, getMoviesByGenre } from "./apis/tmdbAPI";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MovieCard from "./components/MovieCard/MovieCard";
import SideMenu from "./components/SideMenu/SideMenu";
import NavBtn from "./components/NavBtn/NavBtn";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [category, setCategory] = useState("popular");
  const [allGenres, setAllGenres] = useState([]);
  const [genreId, setGenreId] = useState(0);
  const [page, setPage] = useState(1);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
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
    setPage((prevPage) => (prevPage < 500 ? prevPage + 1 : 1));
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
      const data = await getMovies(category, genreId, page);
      setMovies(data.results);

      // scroll to top
      window.scrollTo(0, 0);
    };
    getData();
  }, [page, category, genreId]);

  return (
    <>
      <SideMenu
        changeCategory={changeCategory}
        allGenres={allGenres}
        changeGenre={changeGenre}
        showMenu={showMenu}
      />
      <Header
        toggleShowMenu={toggleShowMenu}
        handleSearch={handleSearch}
        handleSearchSubmit={handleSearchSubmit}
        searchTerm={searchTerm}
      />
      <div className="container">
        <main className="main">
          <Hero movie={movies[0] || ""} />
          <section className="movie-cards">
            {movies.slice(1).map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </section>
          <div className="pagination">
            <NavBtn icon="←" handleClick={prevPage} />
            <p className="pagination__number">{page}</p>
            <NavBtn icon="→" handleClick={nextPage} />
          </div>
        </main>
      </div>
    </>
  );
}
