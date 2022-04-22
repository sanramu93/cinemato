import "./Hero.css";
import NoImage from "../NoImage/NoImage";

export default function Hero({ movie }) {
  const { title, poster_url, backdropUrl, overview } = movie;
  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0,0.5), rgba(0, 0, 0,0.5)) , url(${
      poster_url || backdropUrl
    })`,
  };

  const sliceText = (text, length) => {
    return text.length > length ? `${text.slice(0, length)}...` : text;
  };
  return (
    <section className="hero" style={styles}>
      <h2 className="hero__title">{title}</h2>
      <p className="hero__description">{sliceText(overview, 400)}</p>
      {!poster_url && !backdropUrl ? (
        <NoImage className="hero__no-image" />
      ) : null}
    </section>
  );
}
