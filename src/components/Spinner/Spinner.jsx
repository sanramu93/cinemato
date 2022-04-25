import "./Spinner.css";
export default function Spinner() {
  return (
    <div className="loader-wrapper">
      <div className="loader"></div>
      <h2 className="loader__text">Loading...</h2>
    </div>
  );
}
