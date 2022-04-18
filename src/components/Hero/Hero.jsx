import "./Hero.css";
import noImage from "../../assets/img/no-img.jpg";

export default function Hero({ movie }) {
  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)) , url(${
      movie.backdropUrl || noImage
    })`,
  };

  const sliceText = (text, length) => {
    return text.length > length ? `${text.slice(0, length)}...` : text;
  };
  return (
    <section className="hero" style={styles}>
      <h2 className="hero__title">{movie.title}</h2>
      <p className="hero__description">{sliceText(movie.overview, 400)}</p>
    </section>
  );
}
