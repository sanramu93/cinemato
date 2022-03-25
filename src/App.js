// API KEY: 8d64ceddb4fea0720e842857f6016db4

import { useState, useEffect } from "react";
import "./App.css";
import { getMovies } from "./apis/tmdbAPI";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MovieCard from "./components/MovieCard/MovieCard";
import NavBtn from "./components/NavBtn/NavBtn";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("popular");
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage((prevPage) => (prevPage < 500 ? prevPage + 1 : 1));
  };

  const prevPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getMovies(category, page);
      setMovies(data.results);

      // scroll to top
      window.scrollTo(0, 0);
    };
    getData();
  }, [page]);
  return (
    <>
      <Header />
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
