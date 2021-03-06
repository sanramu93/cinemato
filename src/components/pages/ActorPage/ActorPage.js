import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  getActorDetail,
  getImage,
  getActorMovies,
} from "../../../apis/tmdbAPI";
import { getImdbPersonUrl } from "../../../apis/imdb.API";

import "./ActorPage.css";
import "../pages.css";
import MovieCard from "../../MovieCard/MovieCard";
import LinkTag from "../../LinkTag/LinkTag";
import { FaImdb } from "react-icons/fa";
import { HiArrowSmLeft } from "react-icons/hi";
import Spinner from "../../Spinner/Spinner";

export default function ActorPage({ setIsLoading, isLoading }) {
  const navigate = useNavigate();
  const { actorId } = useParams();
  const [actor, setActor] = useState({});
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

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
      setIsLoading(false);
    };
    getData();
  }, [actorId]);

  const { imgUrl, name, birthday, biography, imdb_id } = actor;

  return (
    <div className="container">
      {isLoading ? (
        <Spinner />
      ) : (
        <section className="page actor">
          <img className=" actor__img" src={imgUrl} alt={name} />
          <h3 className="actor__title">{name}</h3>
          <p className="actor__birthday">Born: {birthday}</p>
          <p className="actor__bio">{biography}</p>
          <div className="actor__tags">
            <LinkTag
              name="IMDB"
              icon={<FaImdb />}
              url={getImdbPersonUrl(imdb_id)}
            />
            <LinkTag
              name="Back"
              icon={<HiArrowSmLeft />}
              onClick={() => navigate("/")}
            />
          </div>
          <h3 className="actor__movies__title">Movies</h3>
          <div className="movie-cards">
            {movies.length > 0 &&
              movies.map((movie) => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                  <MovieCard movie={movie} />
                </Link>
              ))}
          </div>
        </section>
      )}
    </div>
  );
}
