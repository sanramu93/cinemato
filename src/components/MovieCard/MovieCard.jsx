import { useState, useEffect } from "react";
import { BsFillStarFill, BsStar, BsStarHalf } from "react-icons/bs";

import "./MovieCard.css";
import { getRatingStars } from "../../utils/utils";
import noImage from "../../assets/img/no-img.jpg";

export default function MovieCard({ movie }) {
  const [ratingStars, setRatingStars] = useState([]);

  // Getting number of Rating stars
  useEffect(() => {
    const { vote_average } = movie;
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
      <img
        src={movie.posterUrl || movie.backdropUrl || noImage}
        alt=""
        className="movie-card__img"
      />
      <h3 className="movie-card__title">{movie.title}</h3>
      <div className="movie-card__rating">
        <div className="rating__stars">{renderRatingStars()}</div>
        <p className="rating-number">{`${movie.vote_average}/10`}</p>
      </div>
    </div>
  );
}
