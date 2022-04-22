import { useState, useEffect } from "react";
import { BsFillStarFill, BsStar, BsStarHalf } from "react-icons/bs";

import "./MovieCard.css";
import { getRatingStars } from "../../utils/utils";
import NoImage from "../NoImage/NoImage";

export default function MovieCard({ movie }) {
  const [ratingStars, setRatingStars] = useState([]);

  const { title, posterUrl, backdropUrl, vote_average } = movie;

  // Getting number of Rating stars
  useEffect(() => {
    if (!vote_average) return;
    const stars = getRatingStars(vote_average);
    setRatingStars(stars);
  }, [movie]);

  const renderRatingStars = () => {
    return ratingStars.map((star, i) => {
      if (star === "filled")
        return <BsFillStarFill key={`star#${i}`} className="rating__star" />;
      else if (star === "halfFilled")
        return <BsStarHalf key={`star#${i}`} className="rating__star" />;
      else return <BsStar key={`star#${i}`} className="rating__star" />;
    });
  };

  return (
    <div className="movie-card">
      <div className="movie-card__img__container">
        {posterUrl ? (
          <img
            src={posterUrl}
            alt={`${title} poster`}
            className="movie-card__img"
          />
        ) : (
          <NoImage />
        )}
      </div>
      <h3 className="movie-card__title">{title}</h3>
      <div className="movie-card__rating">
        <div className="rating__stars">{renderRatingStars()}</div>
        <p className="rating-number">{`${vote_average?.toFixed(1)}/10`}</p>
      </div>
    </div>
  );
}
