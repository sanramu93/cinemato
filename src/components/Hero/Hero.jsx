import "./Hero.css";
import { getMoviePosterUrl } from "../../apis/tmdbAPI";

export default function Hero({ movie }) {
  const { title, overview, poster_path } = movie;
  const posterUrl = poster_path && getMoviePosterUrl(poster_path);

  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)) , url(${posterUrl})`,
  };

  return (
    <section className="hero" style={styles}>
      <h3 className="hero_title">{title}</h3>
      <p className="hero__desc">{overview}</p>
    </section>
  );
}
