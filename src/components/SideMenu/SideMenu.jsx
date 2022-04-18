import "./SideMenu.css";
import FilterLink from "../FilterLink/FilterLink";

export default function SideMenu({
  allGenres,
  changeCategory,
  changeGenre,
  showMenu,
}) {
  return (
    <div className={`side-menu ${showMenu ? "side-menu--shown" : ""} `}>
      <div className="side-menu__top">
        <div className="side-menu__logo">Cinemato</div>
      </div>
      <h3 className="side-menu__title">Categories</h3>
      <ul className="side-menu__categories">
        <li className="side-menu__link">
          <FilterLink
            changeCategory={() => changeCategory("popular")}
            name="popular"
          />
        </li>
        <li className="side-menu__link">
          <FilterLink
            changeCategory={() => changeCategory("top_rated")}
            name="top_rated"
          />
        </li>
        <li className="side-menu__link">
          <FilterLink
            changeCategory={() => changeCategory("upcoming")}
            name="upcoming"
          />
        </li>
      </ul>
      <h3 className="side-menu__title">Genres</h3>
      <ul>
        {allGenres.map((genre) => (
          <li key={genre.id} className="side-menu__link">
            <FilterLink
              name={genre.name}
              changeGenre={() => changeGenre(genre.name)}
            />
          </li>
        ))}
      </ul>
      {/*

      <ul className="side-menu__genres">
        <h3 className="side-menu__title">Genres</h3>
        <li className="side-menu__link">
          <Link
            className="filter-link"
            to="/"
            name="Action"
            onClick={changeGenre}
          >
            <HiFire className="filter-link__logo" />
            Action
          </Link>
        </li>
        <li className="side-menu__link">
          <Link
            className="filter-link"
            to="/"
            name="Adventure"
            onClick={changeGenre}
          >
            <FaGlobeAmericas className="filter-link__logo" />
            Adventure
          </Link>
        </li>
        <li className="side-menu__link">
          <Link
            className="filter-link"
            to="/"
            name="Animation"
            onClick={changeGenre}
          >
            <RiMickeyFill className="filter-link__logo" />
            Animation
          </Link>
        </li>
        <li className="side-menu__link">
          <Link
            className="filter-link"
            to="/"
            name="Comedy"
            onClick={changeGenre}
          >
            <RiEmotionLaughFill className="filter-link__logo" />
            Comedy
          </Link>
        </li>
        <li className="side-menu__link">
          <Link
            className="filter-link"
            to="/"
            name="Crime"
            onClick={changeGenre}
          >
            <GiPistolGun className="filter-link__logo" />
            Crime
          </Link>
        </li>
        <li className="side-menu__link">
          <Link
            className="filter-link"
            to="/"
            name="Documentary"
            onClick={changeGenre}
          >
            <HiVideoCamera className="filter-link__logo" />
            Documentary
          </Link>
        </li>
        <li className="side-menu__link">
          <Link
            className="filter-link"
            to="/"
            name="Drama"
            onClick={changeGenre}
          >
            <FaTheaterMasks className="filter-link__logo" />
            Drama
          </Link>
        </li>
        <li className="side-menu__link">
          <Link
            className="filter-link"
            to="/"
            name="Family"
            onClick={changeGenre}
          >
            <HiUserGroup className="filter-link__logo" />
            Family
          </Link>
        </li>
        <li className="side-menu__link">
          <Link
            className="filter-link"
            to="/"
            name="Fantasy"
            onClick={changeGenre}
          >
            <HiSparkles className="filter-link__logo" />
            Fantasy
          </Link>
        </li>
        <li className="side-menu__link">
          <Link
            className="filter-link"
            to="/"
            name="History"
            onClick={changeGenre}
          >
            <HiBookOpen className="filter-link__logo" />
            History
          </Link>
        </li>
        <li className="side-menu__link">
          <Link
            className="filter-link"
            to="/"
            name="Horror"
            onClick={changeGenre}
          >
            <FaSkull className="filter-link__logo" />
            Horror
          </Link>
        </li>
        <li className="side-menu__link">
          <Link
            className="filter-link"
            to="/"
            name="Music"
            onClick={changeGenre}
          >
            <HiMusicNote className="filter-link__logo" />
            Music
          </Link>
        </li>
        <li className="side-menu__link">
          <Link
            className="filter-link"
            to="/"
            name="Mystery"
            onClick={changeGenre}
          >
            <FaUserSecret className="filter-link__logo" />
            Mystery
          </Link>
        </li>
        <li className="side-menu__link">
          <Link
            className="filter-link"
            to="/"
            name="Romance"
            onClick={changeGenre}
          >
            <HiHeart className="filter-link__logo" />
            Romance
          </Link>
        </li>
        <li className="side-menu__link">
          <Link
            className="filter-link"
            to="/"
            name="Science Fiction"
            onClick={changeGenre}
          >
            <HiBeaker className="filter-link__logo" />
            Science Fiction
          </Link>
        </li>
        <li className="side-menu__link">
          <Link
            className="filter-link"
            to="/"
            name="TV Movie"
            onClick={changeGenre}
          >
            <FaTv className="filter-link__logo" />
            TV Movie
          </Link>
        </li>
        <li className="side-menu__link">
          <Link
            className="filter-link"
            to="/"
            name="Thriller"
            onClick={changeGenre}
          >
            <HiPuzzle className="filter-link__logo" />
            Thriller
          </Link>
        </li>
        <li className="side-menu__link">
          <Link className="filter-link" to="/" name="War" onClick={changeGenre}>
            <FaBomb className="filter-link__logo" />
            War
          </Link>
        </li>
        <li className="side-menu__link">
          <Link
            className="filter-link"
            to="/"
            name="Western"
            onClick={changeGenre}
          >
            <FaHatCowboy className="filter-link__logo" />
            Western
          </Link>
        </li> */}
    </div>
  );
}
