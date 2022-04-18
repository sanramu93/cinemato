import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  getMovieDetail,
  getImage,
  getMovieCredits,
  getMovieRecommendations,
} from "../../apis/tmdbAPI";
// import { getRatingStars } from "../utils/utils";
import "./MoviePage.css";
import MovieCard from "../../components/MovieCard/MovieCard";

export default function MoviePage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const getData = async () => {
      const movieData = await getMovieDetail(movieId);
      const movieCredits = await getMovieCredits(movieId);
      const movieRecommendations = await getMovieRecommendations(movieId);
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
  } = movie;

  return (
    <div className="container">
      <section className="movie-detail">
        <MovieCard movie={movie} />
        <p className="movie-detail__tagline">{tagline}</p>
        <p className="movie-detail__runtime">{`${runtime} min / ${release_date} / ${original_language}`}</p>
        <div className="movie-detail__genres">
          {genres?.map((gen) => (
            <div key={gen.id} className="genre">
              {gen.name}
            </div>
          ))}
        </div>
        <div className="movie-detail__section movie-detail__overview">
          <h3 className="overview__title">Overview</h3>
          <p className="overview__desc">{overview}</p>
        </div>
        <div className="movie-detail__section movie-detail__top-cast">
          <h3 className="top-cast__title">Top Cast</h3>
          <div className="top-cast__profiles">
            {credits.cast?.slice(0, 6).map((profile) => (
              <div key={profile.id} className="top-cast__profile">
                <Link to={`/actors/${profile.id}`}>
                  <img
                    className="profile__img"
                    src={getImage(profile.profile_path)}
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
          <a href="" className="movie-detail__tag">
            Website
          </a>
          <a href="" className="movie-detail__tag">
            IMDB
          </a>
          <a href="" className="movie-detail__tag">
            Trailer
          </a>
          <a href="" className="movie-detail__tag">
            Back
          </a>
        </div>
        <div className="movie-detail__section movie-detail__related">
          <h2 className="related__title">You might also like</h2>
          {recommendations.map((movie) => (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
