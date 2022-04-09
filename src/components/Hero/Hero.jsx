import "./Hero.css";
import noImage from "../../assets/img/no-img.jpg";

export default function Hero({ movie }) {
  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) , url(${
      movie.backdropUrl || noImage
    })`,
  };

  return (
    <section className="hero" style={styles}>
      <h2 className="hero_title">{movie.title}</h2>
      <p className="hero__description">{movie.overview}</p>
    </section>
  );
}
