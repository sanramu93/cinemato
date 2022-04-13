import { Link } from "react-router-dom";
import {
  HiThumbUp,
  HiTrendingUp,
  HiEye,
  HiFire,
  HiBookOpen,
  HiUserGroup,
  HiSparkles,
  HiVideoCamera,
  HiMusicNote,
  HiHeart,
  HiBeaker,
  HiPuzzle,
} from "react-icons/hi";

import { RiMickeyFill, RiEmotionLaughFill } from "react-icons/ri";

import {
  FaUserSecret,
  FaTheaterMasks,
  FaSkull,
  FaTv,
  FaBomb,
  FaHatCowboy,
  FaGlobeAmericas,
} from "react-icons/fa";

import { GiPistolGun } from "react-icons/gi";

import "./SideMenu.css";

export default function SideMenu({ changeCategory, changeGenre, showMenu }) {
  return (
    <div className={`side-menu ${showMenu ? "side-menu--shown" : ""} `}>
      <div className="side-menu__top">
        <div className="side-menu__logo">Cinemato</div>
      </div>
      <ul className="side-menu__categories">
        <h3 className="side-menu__title">Categories</h3>
        <li className="side-menu__link">
          <Link to="/" name="popular" onClick={changeCategory}>
            <HiThumbUp className="link__logo" />
            <span className="link__text">Popular</span>
          </Link>
        </li>
        <li className="side-menu__link">
          <Link to="/" name="top_rated" onClick={changeCategory}>
            <HiTrendingUp className="link__logo" />
            Top Rated
          </Link>
        </li>
        <li className="side-menu__link">
          <Link to="/" name="upcoming" onClick={changeCategory}>
            <HiEye className="link__logo" />
            Upcoming
          </Link>
        </li>
      </ul>
      <ul className="side-menu__genres">
        <h3 className="side-menu__title">Genres</h3>
        <li className="side-menu__link">
          <Link to="/" name="Action" onClick={changeGenre}>
            <HiFire className="link__logo" />
            Action
          </Link>
        </li>
        <li className="side-menu__link">
          <Link to="/" name="Adventure" onClick={changeGenre}>
            <FaGlobeAmericas className="link__logo" />
            Adventure
          </Link>
        </li>
        <li className="side-menu__link">
          <Link to="/" name="Animation" onClick={changeGenre}>
            <RiMickeyFill className="link__logo" />
            Animation
          </Link>
        </li>
        <li className="side-menu__link">
          <Link to="/" name="Comedy" onClick={changeGenre}>
            <RiEmotionLaughFill className="link__logo" />
            Comedy
          </Link>
        </li>
        <li className="side-menu__link">
          <Link to="/" name="Crime" onClick={changeGenre}>
            <GiPistolGun className="link__logo" />
            Crime
          </Link>
        </li>
        <li className="side-menu__link">
          <Link to="/" name="Documentary" onClick={changeGenre}>
            <HiVideoCamera className="link__logo" />
            Documentary
          </Link>
        </li>
        <li className="side-menu__link">
          <Link to="/" name="Drama" onClick={changeGenre}>
            <FaTheaterMasks className="link__logo" />
            Drama
          </Link>
        </li>
        <li className="side-menu__link">
          <Link to="/" name="Family" onClick={changeGenre}>
            <HiUserGroup className="link__logo" />
            Family
          </Link>
        </li>
        <li className="side-menu__link">
          <Link to="/" name="Fantasy" onClick={changeGenre}>
            <HiSparkles className="link__logo" />
            Fantasy
          </Link>
        </li>
        <li className="side-menu__link">
          <Link to="/" name="History" onClick={changeGenre}>
            <HiBookOpen className="link__logo" />
            History
          </Link>
        </li>
        <li className="side-menu__link">
          <Link to="/" name="Horror" onClick={changeGenre}>
            <FaSkull className="link__logo" />
            Horror
          </Link>
        </li>
        <li className="side-menu__link">
          <Link to="/" name="Music" onClick={changeGenre}>
            <HiMusicNote className="link__logo" />
            Music
          </Link>
        </li>
        <li className="side-menu__link">
          <Link to="/" name="Mystery" onClick={changeGenre}>
            <FaUserSecret className="link__logo" />
            Mystery
          </Link>
        </li>
        <li className="side-menu__link">
          <Link to="/" name="Romance" onClick={changeGenre}>
            <HiHeart className="link__logo" />
            Romance
          </Link>
        </li>
        <li className="side-menu__link">
          <Link to="/" name="Science Fiction" onClick={changeGenre}>
            <HiBeaker className="link__logo" />
            Science Fiction
          </Link>
        </li>
        <li className="side-menu__link">
          <Link to="/" name="TV Movie" onClick={changeGenre}>
            <FaTv className="link__logo" />
            TV Movie
          </Link>
        </li>
        <li className="side-menu__link">
          <Link to="/" name="Thriller" onClick={changeGenre}>
            <HiPuzzle className="link__logo" />
            Thriller
          </Link>
        </li>
        <li className="side-menu__link">
          <Link to="/" name="War" onClick={changeGenre}>
            <FaBomb className="link__logo" />
            War
          </Link>
        </li>
        <li className="side-menu__link">
          <Link to="/" name="Western" onClick={changeGenre}>
            <FaHatCowboy className="link__logo" />
            Western
          </Link>
        </li>
      </ul>
    </div>
  );
}
