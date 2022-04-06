import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetail, getMoviePosterUrl } from "../apis/tmdbAPI";
// import { getRatingStars } from "../utils/utils";
import SideMenu from "../components/SideMenu/SideMenu";
import MovieCard from "../components/MovieCard/MovieCard";
import Header from "../components/Header/Header";

export default function MoviePage({
  changeCategory,
  allGenres,
  changeGenre,
  showMenu,
  toggleShowMenu,
  handleSearchSubmit,
  searchTerm,
}) {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const data = await getMovieDetail(id);
      setMovie({ ...data, posterUrl: getMoviePosterUrl(data.poster_path) });
    };
    getData();
  }, []);

  console.log(movie);

  const {
    tagline,
    vote_average,
    runtime,
    release_date,
    original_language,
    genres,
    overview,
  } = movie;

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
        showSearch={false}
      />
      <div className="container">
        <section className="movie-detail">
          <MovieCard movie={movie} />
          <p className="movie-detail__tagline">{tagline}</p>
          <p className="movie-detail__runtime">{`${runtime} min / ${release_date} / ${original_language}`}</p>
          <div className="movie-detail__genres"></div>
          {genres?.map((gen) => (
            <div key={gen.id} className="genre">
              {gen.name}
            </div>
          ))}
          <div className="movie-detail__overview">
            <h3 className="overview__title">Overview</h3>
            <p className="overview__desc">{overview}</p>
          </div>
          <div className="top-cast">{/* CAST */}</div>
          <div className="movie-detail__tags">
            <a href="" className="tag">
              Website
            </a>
            <a href="" className="tag">
              IMDB
            </a>
            <a href="" className="tag">
              Trailer
            </a>
            <button>Back</button>
          </div>
          <div className="movie-detail__related">
            <h2 className="related__title">You might also like</h2>
            {/* RELATED MOVIES */}
          </div>
        </section>
      </div>
    </>
  );
}
