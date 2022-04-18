import { HiExclamation } from "react-icons/hi";
import "./NotFound.css";
export default function NotFound() {
  return (
    <div className="not-found">
      <HiExclamation className="not-found__logo" />
      <h2 className="not-found__message">No results available</h2>
    </div>
  );
}
