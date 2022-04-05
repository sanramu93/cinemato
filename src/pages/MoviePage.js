import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../apis/tmdbAPI";

export default function MoviePage() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      console.log(id);
      const data = await getMovieDetail(id);
      setMovie(data);
    };
    getData();
  }, []);

  console.log(movie);
  return (
    <section className="movie-detail">
      <img className="movie-detail__img" src="" alt="" />
      <h2 className="movie-detail__title"></h2>
      <p className="movie-detail__tagline"></p>
      <div className="movie-detail__rating">
        <div className="rating__stars"></div>
        <p className="rating__number"></p>
      </div>
      <p className="movie-detail__date"></p>
      <div className="movie-detail__categories">{/* CATEGORY */}</div>
      <div className="movie-detail__overview">
        <h3 className="overview__title">Overview</h3>
        <p className="overview__desc"></p>
      </div>
    </section>
  );
}
