import "./SideMenu.css";
import { FaPlayCircle } from "react-icons/fa";
import FilterLink from "../FilterLink/FilterLink";

export default function SideMenu({
  darkMode,
  allGenres,
  changeCategory,
  changeGenre,
  showMenu,
}) {
  return (
    <div
      className={`side-menu ${showMenu && "side-menu--shown"} ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="side-menu__top">
        <div className="side-menu__logo">
          Cinemato
          <FaPlayCircle className="side-menu__logo__icon" />
        </div>
      </div>
      <div className="side-menu__filters">
        <h3 className="side-menu__title">Categories</h3>
        <ul className="side-menu__categories">
          <li className="side-menu__link">
            <FilterLink
              darkMode={darkMode}
              changeCategory={() => changeCategory("popular")}
              name="popular"
            />
          </li>
          <li className="side-menu__link">
            <FilterLink
              darkMode={darkMode}
              changeCategory={() => changeCategory("top_rated")}
              name="top_rated"
            />
          </li>
          <li className="side-menu__link">
            <FilterLink
              darkMode={darkMode}
              changeCategory={() => changeCategory("upcoming")}
              name="upcoming"
            />
          </li>
        </ul>
      </div>
      <div className="side-menu__filters">
        <h3 className="side-menu__title">Genres</h3>
        <ul className="side-menu__genres">
          {allGenres.map((genre) => (
            <li key={genre.id} className="side-menu__link">
              <FilterLink
                darkMode={darkMode}
                name={genre.name}
                changeGenre={() => changeGenre(genre.name)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
