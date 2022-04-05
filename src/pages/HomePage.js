import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getMovies, getMovieGenres, getMoviePosterUrl } from "../apis/tmdbAPI";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import MovieCard from "../components/MovieCard/MovieCard";
import SideMenu from "../components/SideMenu/SideMenu";
import NavBtn from "../components/NavBtn/NavBtn";

export default function HomePage() {
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
    <>
      <SideMenu
        changeCategory={changeCategory}
        allGenres={allGenres}
        changeGenre={changeGenre}
        showMenu={showMenu}
      />
      <Header
        toggleShowMenu={toggleShowMenu}
        handleSearchSubmit={handleSearchSubmit}
        searchTerm={searchTerm}
      />
      <div className="container">
        <main className="main">
          <Link to={`/movie/${movies[0]?.id}`}>
            <Hero movie={movies[0] || ""} />
          </Link>
          <section className="movie-cards">
            {movies.slice(1).map((movie) => (
              <Link key={movie.id} to={`/movie/${movie.id}`}>
                <MovieCard movie={movie} />
              </Link>
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
