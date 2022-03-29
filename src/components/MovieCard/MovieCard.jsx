import { useState, useEffect } from "react";

import { BsFillStarFill, BsStar, BsStarHalf } from "react-icons/bs";

import "./MovieCard.css";
import { getMoviePosterUrl } from "../../apis/tmdbAPI";

export default function MovieCard({ movie }) {
  const [movieInfo, setMovieInfo] = useState({
    ...movie,
    posterUrl: getMoviePosterUrl(movie.poster_path),
    ratingStars: [],
  });

  // Getting number of Rating stars
  useEffect(() => {
    const stars = [];
    const rate = Number((movieInfo.vote_average / 2).toFixed(1));
    const filled = Math.floor(rate);
    const halfFilled = Math.round(rate - filled);
    const empty = 5 - (filled + halfFilled);

    stars.push(Array(filled).fill("filled"));
    if (halfFilled > 0) stars.push("halfFilled");
    stars.push(Array(empty).fill("empty"));

    setMovieInfo((prevInfo) => {
      return { ...prevInfo, ratingStars: stars.flat() };
    });
  }, []);

  const renderRatingStars = () => {
    return movieInfo.ratingStars.map((star, i) => {
      if (star === "filled")
        return (
          <BsFillStarFill key={`star#${i}`} className="movie-card__star" />
        );
      else if (star === "halfFilled")
        return <BsStarHalf key={`star#${i}`} className="movie-card__star" />;
      else return <BsStar key={`star#${i}`} className="movie-card__star" />;
    });
  };
  return (
    <div className="movie-card">
      <img src={movieInfo.posterUrl} alt="" className="movie-card__img" />
      <div className="movie-card__title">
        <h2>{movieInfo.title}</h2>
        <div className="movie-card__rating">{renderRatingStars()}</div>
      </div>
    </div>
  );
}
