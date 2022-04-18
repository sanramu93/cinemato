import { Link } from "react-router-dom";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import MovieCard from "../../components/MovieCard/MovieCard";
import NotFound from "../../components/NotFound/NotFound";
import NavBtn from "../../components/NavBtn/NavBtn";

export default function HomePage({
  movies,
  page,
  handlePrevPage,
  handleNextPage,
}) {
  return (
    <div className="container">
      {movies.length === 0 ? (
        <NotFound />
      ) : (
        <section className="home">
          <Link to={`/movie/${movies[0]?.id}`}>
            {<Hero movie={movies[0] || ""} />}
          </Link>
          <section className="movie-cards">
            {movies.slice(1).map((movie) => (
              <Link key={movie.id} to={`/movie/${movie.id}`}>
                <MovieCard movie={movie} />
              </Link>
            ))}
          </section>
          <div className="pagination">
            <NavBtn icon={<HiChevronLeft />} handleClick={handlePrevPage} />
            <p className="pagination__number">{page}</p>
            <NavBtn icon={<HiChevronRight />} handleClick={handleNextPage} />
          </div>
        </section>
      )}
    </div>
  );
}
