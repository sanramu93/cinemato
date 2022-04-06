import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SideMenu.css";

export default function SideMenu({ changeCategory, changeGenre, showMenu }) {
  return (
    <div className={`side-menu ${showMenu ? "side-menu--shown" : ""} `}>
      <div className="side-menu__top">
        <div className="side-menu__logo">LOGO</div>
      </div>
      <hr />
      <ul className="side-menu__categories">
        <li className="category__link">
          <Link to="/" name="popular" onClick={changeCategory}>
            Popular
          </Link>
        </li>
        <li className="category__link">
          <Link to="/" name="top_rated" onClick={changeCategory}>
            Top Rated
          </Link>
        </li>
        <li className="category__link">
          <Link to="/" name="upcoming" onClick={changeCategory}>
            Upcoming
          </Link>
        </li>
      </ul>
      <hr />
      <ul className="side-meun__genres">
        <li className="genre__link">
          <Link to="/" name="Action" onClick={changeGenre}>
            Action
          </Link>
        </li>
        <li className="genre__link">
          <Link to="/" name="Adventure" onClick={changeGenre}>
            Adventure
          </Link>
        </li>
        <li className="genre__link">
          <Link to="/" name="Animation" onClick={changeGenre}>
            Animation
          </Link>
        </li>
        <li className="genre__link">
          <Link to="/" name="Comedy" onClick={changeGenre}>
            Comedy
          </Link>
        </li>
        <li className="genre__link">
          <Link to="/" name="Crime" onClick={changeGenre}>
            Crime
          </Link>
        </li>
        <li className="genre__link">
          <Link to="/" name="Documentary" onClick={changeGenre}>
            Documentary
          </Link>
        </li>
        <li className="genre__link">
          <Link to="/" name="Drama" onClick={changeGenre}>
            Drama
          </Link>
        </li>
        <li className="genre__link">
          <Link to="/" name="Family" onClick={changeGenre}>
            Family
          </Link>
        </li>
        <li className="genre__link">
          <Link to="/" name="Fantasy" onClick={changeGenre}>
            Fantasy
          </Link>
        </li>
        <li className="genre__link">
          <Link to="/" name="History" onClick={changeGenre}>
            History
          </Link>
        </li>
        <li className="genre__link">
          <Link to="/" name="Horror" onClick={changeGenre}>
            Horror
          </Link>
        </li>
        <li className="genre__link">
          <Link to="/" name="Music" onClick={changeGenre}>
            Music
          </Link>
        </li>
        <li className="genre__link">
          <Link to="/" name="Mystery" onClick={changeGenre}>
            Mystery
          </Link>
        </li>
        <li className="genre__link">
          <Link to="/" name="Romance" onClick={changeGenre}>
            Romance
          </Link>
        </li>
        <li className="genre__link">
          <Link to="/" name="Science Fiction" onClick={changeGenre}>
            Science Fiction
          </Link>
        </li>
        <li className="genre__link">
          <Link to="/" name="TV Movie" onClick={changeGenre}>
            TV Movie
          </Link>
        </li>
        <li className="genre__link">
          <Link to="/" name="Thriller" onClick={changeGenre}>
            Thriller
          </Link>
        </li>
        <li className="genre__link">
          <Link to="/" name="War" onClick={changeGenre}>
            War
          </Link>
        </li>
        <li className="genre__link">
          <Link to="/" name="Western" onClick={changeGenre}>
            Western
          </Link>
        </li>
      </ul>
    </div>
  );
}
