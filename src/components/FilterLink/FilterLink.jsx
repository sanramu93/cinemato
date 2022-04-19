import { Link } from "react-router-dom";
import { filters } from "../../data/filters";

import { formatFilterName } from "../../utils/utils";

import "./FilterLink.css";

export default function FilterLink({
  darkMode,
  changeCategory,
  changeGenre,
  name,
}) {
  const filterName = formatFilterName(name);
  return (
    <Link
      className={`filter-link `}
      to="/"
      name={name}
      onClick={changeCategory || changeGenre}
    >
      {filters[filterName].icon}
      <span className={`link__text ${darkMode && "dark"}`}>
        {filters[filterName].name}
      </span>
    </Link>
  );
}
