import { HiOutlineStar } from "react-icons/hi";

import "./MovieCard.css";
import { getMoviePosterUrl } from "../../apis/tmdbAPI";

export default function MovieCard({ movie }) {
  const { title, poster_path } = movie;
  const posterUrl = getMoviePosterUrl(poster_path);

  return (
    <div className="movie-card">
      <img src={posterUrl} alt="" className="movie-card__img" />
      <div className="movie-card__title">
        <h2>{title}</h2>
        <div className="movie-card__rating">
          <HiOutlineStar className="movie-card__star" />
          <HiOutlineStar className="movie-card__star" />
          <HiOutlineStar className="movie-card__star" />
          <HiOutlineStar className="movie-card__star" />
          <HiOutlineStar className="movie-card__star" />
        </div>
      </div>
    </div>
  );
}
