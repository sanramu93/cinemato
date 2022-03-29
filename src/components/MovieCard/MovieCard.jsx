import { useState, useEffect } from "react";
import { BsFillStarFill, BsStar, BsStarHalf } from "react-icons/bs";

import "./MovieCard.css";
import noImage from "../../assets/img/no-img.jpg";

export default function MovieCard({ movie }) {
  const [ratingStars, setRatingStars] = useState([]);

  // Getting number of Rating stars
  useEffect(() => {
    const stars = [];
    const rate = Number((movie.vote_average / 2).toFixed(1));
    const filled = Math.floor(rate);
    const halfFilled = Math.round(rate - filled);
    const empty = 5 - (filled + halfFilled);

    stars.push(Array(filled).fill("filled"));
    if (halfFilled > 0) stars.push("halfFilled");
    stars.push(Array(empty).fill("empty"));

    setRatingStars(stars.flat());
  }, []);

  const renderRatingStars = () => {
    return ratingStars.map((star, i) => {
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
      <img
        src={movie.posterUrl || noImage}
        alt=""
        className="movie-card__img"
      />
      <div className="movie-card__title">
        <h2>{movie.title}</h2>
        <div className="movie-card__rating">{renderRatingStars()}</div>
      </div>
    </div>
  );
}
