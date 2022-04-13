import "./overlay.css";

export default function Overlay({ handleOverlayClick }) {
  return <div className="overlay" onClick={handleOverlayClick}></div>;
}
