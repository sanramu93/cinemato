import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  getMovieDetail,
  getImage,
  getMovieCredits,
  getMovieRecommendations,
  getMovieTrailers,
} from "../../../apis/tmdbAPI";
import { getImdbUrl } from "../../../apis/imdb.API";
import { getMovieTrailer } from "../../../apis/youtubeAPI";
import "../pages.css";
import "./MoviePage.css";
import noImage from "../../../assets/img/no-img.jpg";
import MovieCard from "../../MovieCard/MovieCard";
import FilterLink from "../../FilterLink/FilterLink";
import { FaGlobe, FaImdb, FaVideo } from "react-icons/fa";
import { HiArrowSmLeft } from "react-icons/hi";
import LinkTag from "../../LinkTag/LinkTag";
import Spinner from "../../Spinner/Spinner";

export default function MoviePage({ changeGenre, setIsLoading, isLoading }) {
  let navigate = useNavigate();
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [trailer, setTrailer] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    const getData = async () => {
      setIsLoading(true);
      const movieData = await getMovieDetail(movieId);
      const movieCredits = await getMovieCredits(movieId);
      const movieRecommendations = await getMovieRecommendations(movieId);
      const movieTrailers = await getMovieTrailers(movieId);
      setMovie({
        ...movieData,
        posterUrl: getImage(movieData.poster_path),
      });
      setCredits(movieCredits);
      setRecommendations(
        movieRecommendations.results.map((movie) => ({
          ...movie,
          posterUrl: getImage(movie.poster_path),
        }))
      );
      setTrailer(
        movieTrailers.results.find((trailer) => trailer.type === "Trailer")
      );
      setIsLoading(false);
    };
    getData();
  }, [movieId]);

  const {
    tagline,
    runtime,
    release_date,
    original_language,
    genres,
    overview,
    homepage,
    imdb_id,
  } = movie;

  return (
    <div className="container">
      {isLoading ? (
        <Spinner />
      ) : (
        <section className="page movie-detail">
          <div className="movie-card__container">
            <MovieCard movie={movie} isLoading={isLoading} />
          </div>
          <p className="movie-detail__tagline">{tagline}</p>
          <p className="movie-detail__runtime">{`${runtime} min / ${release_date} / ${original_language}`}</p>
          <ul className="movie-detail__genres">
            {genres?.map((gen) => (
              <li key={gen.id}>
                <FilterLink
                  name={gen.name}
                  changeGenre={() => changeGenre(gen.name)}
                />
              </li>
            ))}
          </ul>

          <div className="movie-detail__section movie-detail__overview">
            <h3 className="overview__title">Overview</h3>
            <p className="overview__desc">{overview}</p>
          </div>
          <div className="movie-detail__section movie-detail__top-cast">
            <h3 className="top-cast__title">Top Cast</h3>
            <div className="top-cast__profiles">
              {credits.cast?.slice(0, 12).map((profile) => (
                <div key={profile.id} className="top-cast__profile">
                  <Link to={`/actors/${profile.id}`}>
                    <img
                      className="profile__img"
                      src={getImage(profile.profile_path) || noImage}
                      alt=""
                    />
                  </Link>
                  <p className="profile__name">{profile.name}</p>
                  <p className="profile__character">{profile.character}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="movie-detail__section movie-detail__tags">
            <LinkTag name="Website" icon={<FaGlobe />} url={homepage} />
            <LinkTag name="IMDB" icon={<FaImdb />} url={getImdbUrl(imdb_id)} />
            <LinkTag
              name="Trailer"
              icon={<FaVideo />}
              url={getMovieTrailer(trailer?.key)}
            />
            <LinkTag
              name="Back"
              icon={<HiArrowSmLeft />}
              onClick={() => navigate("/")}
            />
          </div>
          {recommendations.length > 0 ? (
            <div className="movie-detail__section movie-detail__related">
              <h2 className="related__title">You might also like</h2>
              <div className="movie-cards">
                {recommendations.map((movie) => (
                  <Link key={movie.id} to={`/movie/${movie.id}`}>
                    <MovieCard
                      movie={movie}
                      isLoading={isLoading}
                      setIsLoading={setIsLoading}
                    />
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </section>
      )}
    </div>
  );
}
