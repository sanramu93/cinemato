import "./Hero.css";
import noImage from "../../assets/img/no-img.jpg";

export default function Hero({ movie }) {
  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)) , url(${
      movie.posterUrl || noImage
    })`,
  };

  return (
    <section className="hero" style={styles}>
      <h3 className="hero_title">{movie.title}</h3>
      <p className="hero__desc">{movie.overview}</p>
    </section>
  );
}
