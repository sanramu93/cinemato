import { FaEyeSlash } from "react-icons/fa";
import "./NoImage.css";

export default function NoImage() {
  return (
    <div className="no-image">
      <FaEyeSlash className="no-image__icon" />
      <h3 className="no-image__text">
        No image <br /> Available
      </h3>
    </div>
  );
}
