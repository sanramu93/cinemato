import "./Hero.css";
import noImage from "../../assets/img/no-img.jpg";
import NoImage from "../NoImage/NoImage";
import Spinner from "../Spinner/Spinner";

export default function Hero({ movie, showOverview, isLoading }) {
  const { title, posterUrl, backdropUrl, overview } = movie;
  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0,0.5), rgba(0, 0, 0,0.5)) , url(${
      backdropUrl || posterUrl
    })`,
  };

  const sliceText = (text, length) => {
    return text.length > length ? `${text.slice(0, length)}...` : text;
  };

  return (
    <section className="hero" style={styles}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h2 className="hero__title">{title}</h2>
          {showOverview && (
            <p className="hero__description">{sliceText(overview, 400)}</p>
          )}

          {!posterUrl && !backdropUrl && <NoImage className="hero__no-image" />}
        </>
      )}
    </section>
  );
}
