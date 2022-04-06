import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../apis/tmdbAPI";

import SideMenu from "../components/SideMenu/SideMenu";
import Header from "../components/Header/Header";

export default function MoviePage({
  changeCategory,
  allGenres,
  changeGenre,
  showMenu,
  toggleShowMenu,
  handleSearchSubmit,
  searchTerm,
}) {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      console.log(id);
      const data = await getMovieDetail(id);
      setMovie(data);
    };
    getData();
  }, []);

  console.log(movie);
  return (
    <>
      <SideMenu
        changeCategory={changeCategory}
        allGenres={allGenres}
        changeGenre={changeGenre}
        showMenu={showMenu}
      />
      <Header
        toggleShowMenu={toggleShowMenu}
        handleSearchSubmit={handleSearchSubmit}
        searchTerm={searchTerm}
        showSearch={false}
      />
      <section className="movie-detail">
        <img className="movie-detail__img" src="" alt="" />
        <h2 className="movie-detail__title"></h2>
        <p className="movie-detail__tagline"></p>
        <div className="movie-detail__rating">
          <div className="rating__stars"></div>
          <p className="rating__number"></p>
        </div>
        <p className="movie-detail__date"></p>
        <div className="movie-detail__categories">{/* CATEGORY */}</div>
        <div className="movie-detail__overview">
          <h3 className="overview__title">Overview</h3>
          <p className="overview__desc"></p>
        </div>
      </section>
    </>
  );
}
