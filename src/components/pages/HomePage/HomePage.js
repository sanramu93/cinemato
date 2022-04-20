import { Link } from "react-router-dom";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "../pages.css";
import "./Home.css";
import Hero from "../../Hero/Hero";
import MovieCard from "../../MovieCard/MovieCard";
import NotFound from "../../NotFound/NotFound";
import NavBtn from "../../NavBtn/NavBtn";

export default function HomePage({
  movies,
  totalPages,
  page,
  handlePrevPage,
  handleNextPage,
  reference,
}) {
  return (
    <div ref={reference} className="container">
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
            <NavBtn
              disable={page <= 1 && true}
              icon={<HiChevronLeft />}
              handleClick={handlePrevPage}
            />
            <p className="pagination__number">{page}</p>
            <NavBtn
              disable={page === totalPages && true}
              icon={<HiChevronRight />}
              handleClick={handleNextPage}
            />
          </div>
        </section>
      )}
    </div>
  );
}
