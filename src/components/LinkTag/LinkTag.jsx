import "./LinkTag.css";

export default function LinkTag({ name, icon, url, onClick }) {
  return (
    <a
      onClick={onClick}
      href={url}
      target="_blank"
      rel="noreferrer"
      className="link-tag"
    >
      <div className="link-tag__icon">{icon}</div>
      <p className="link-tag__text">{name}</p>
    </a>
  );
}
