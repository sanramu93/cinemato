import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import MovieCard from "../../components/MovieCard/MovieCard";
import SideMenu from "../../components/SideMenu/SideMenu";
import NavBtn from "../../components/NavBtn/NavBtn";

export default function HomePage({
  changeCategory,
  allGenres,
  changeGenre,
  showMenu,
  toggleShowMenu,
  handleSearchSubmit,
  searchTerm,
  movies,
  page,
  handlePrevPage,
  handleNextPage,
}) {
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
        showSearch={true}
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
            <NavBtn icon="←" handleClick={handlePrevPage} />
            <p className="pagination__number">{page}</p>
            <NavBtn icon="→" handleClick={handleNextPage} />
          </div>
        </main>
      </div>
    </>
  );
}
