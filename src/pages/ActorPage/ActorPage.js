import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getActorDetail, getImage, getActorMovies } from "../../apis/tmdbAPI";
import SideMenu from "../../components/SideMenu/SideMenu";
import Header from "../../components/Header/Header";
import MovieCard from "../../components/MovieCard/MovieCard";

export default function ActorPage({
  changeCategory,
  allGenres,
  changeGenre,
  showMenu,
  toggleShowMenu,
  handleSearchSubmit,
  searchTerm,
}) {
  const { actorId } = useParams();
  const [actor, setActor] = useState({});
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const actorData = await getActorDetail(actorId);
      const actorMovies = await getActorMovies(actorId);
      setActor({
        ...actorData,
        imgUrl: getImage(actorData.profile_path, 500),
      });
      setMovies(
        actorMovies.results.map((movie) => ({
          ...movie,
          posterUrl: getImage(movie.poster_path, 500),
          backdropUrl: getImage(movie.backdrop_path, 1280),
        }))
      );
    };
    getData();
  }, [actorId]);

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
      <section className="actor">
        <img className="actor__img" src={actor.imgUrl} alt={actor.name} />
        <h2 className="actor__title">{actor.name}</h2>
        <p className="actor__birthday">Born: {actor.birthday}</p>
        <p className="actor__bio">{actor.biography}</p>
        <div className="actor__tags">
          <a href="#!" className="tag__imdb">
            IMDB
          </a>
          <a href="#!" className="tag__back">
            BACK
          </a>
        </div>
        <h2 className="actor__movies__title">Movies</h2>
        <div className="actor__movies">
          {movies.length > 0 &&
            movies.map((movie) => (
              <Link key={movie.id} to={`/movie/${movie.id}`}>
                <MovieCard movie={movie} />
              </Link>
            ))}
        </div>
      </section>
    </>
  );
}
