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
  FaRocket,
} from "react-icons/fa";

import { GiPistolGun } from "react-icons/gi";

export const filters = {
  popular: {
    name: "Popular",
    icon: <HiThumbUp className="filter-link__logo" />,
  },

  top_rated: {
    name: "Top Rated",
    icon: <HiTrendingUp className="filter-link__logo" />,
  },

  upcoming: {
    name: "Upcoming",
    icon: <HiEye className="filter-link__logo" />,
  },
  action: {
    name: "Action",
    icon: <HiFire className="filter-link__logo" />,
  },
  adventure: {
    name: "Adventure",
    icon: <FaGlobeAmericas className="filter-link__logo" />,
  },
  animation: {
    name: "Animation",
    icon: <RiMickeyFill className="filter-link__logo" />,
  },
  comedy: {
    name: "Comedy",
    icon: <RiEmotionLaughFill className="filter-link__logo" />,
  },
  crime: {
    name: "Crime",
    icon: <GiPistolGun className="filter-link__logo" />,
  },
  documentary: {
    name: "Documentary",
    icon: <HiVideoCamera className="filter-link__logo" />,
  },
  drama: {
    name: "Drama",
    icon: <FaTheaterMasks className="filter-link__logo" />,
  },

  family: {
    name: "Family",
    icon: <HiUserGroup className="filter-link__logo" />,
  },
  fantasy: {
    name: "Fantasy",
    icon: <HiSparkles className="filter-link__logo" />,
  },
  history: {
    name: "History",
    icon: <HiBookOpen className="filter-link__logo" />,
  },
  horror: {
    name: "Horror",
    icon: <FaSkull className="filter-link__logo" />,
  },
  music: {
    name: "Music",
    icon: <HiMusicNote className="filter-link__logo" />,
  },
  mystery: {
    name: "Mystery",
    icon: <FaUserSecret className="filter-link__logo" />,
  },
  romance: {
    name: "Romance",
    icon: <HiHeart className="filter-link__logo" />,
  },
  science_fiction: {
    name: "Science Fiction",
    icon: <FaRocket className="filter-link__logo" />,
  },
  tv_movie: {
    name: "TV Movie",
    icon: <FaTv className="filter-link__logo" />,
  },
  thriller: {
    name: "Thriller",
    icon: <HiPuzzle className="filter-link__logo" />,
  },
  war: {
    name: "War",
    icon: <FaBomb className="filter-link__logo" />,
  },
  western: {
    name: "Western",
    icon: <FaHatCowboy className="filter-link__logo" />,
  },
};
