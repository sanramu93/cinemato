import "./LinkTag.css";

export default function LinkTag({ name, icon, url, onClick }) {
  return (
    <a onClick={onClick} href={url} target="_blank" className="link-tag">
      <div className="link-tag__icon">{icon}</div>
      {name}
    </a>
  );
}
