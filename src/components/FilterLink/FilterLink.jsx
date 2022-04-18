import { Link } from "react-router-dom";
import { filters } from "../../data/filters";

import { formatFilterName } from "../../utils/utils";

export default function FilterLink({ changeCategory, changeGenre, name }) {
  const filterName = formatFilterName(name);
  return (
    <Link
      className="filter-link"
      to="/"
      name={name}
      onClick={changeCategory || changeGenre}
    >
      {filters[filterName].icon}
      <span className="link__text">{filters[filterName].name}</span>
    </Link>
  );
}
