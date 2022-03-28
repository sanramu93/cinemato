import React, { useState } from "react";
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
          <a href="#!" name="popular" onClick={changeCategory}>
            Popular
          </a>
        </li>
        <li className="category__link">
          <a href="#!" name="top_rated" onClick={changeCategory}>
            Top Rated
          </a>
        </li>
        <li className="category__link">
          <a href="#!" name="upcoming" onClick={changeCategory}>
            Upcoming
          </a>
        </li>
      </ul>
      <hr />
      <ul className="side-meun__genres">
        <li className="genre__link">
          <a href="#!" name="Action" onClick={changeGenre}>
            Action
          </a>
        </li>
        <li className="genre__link">
          <a href="#!" name="Adventure" onClick={changeGenre}>
            Adventure
          </a>
        </li>
        <li className="genre__link">
          <a href="#!" name="Animation" onClick={changeGenre}>
            Animation
          </a>
        </li>
        <li className="genre__link">
          <a href="#!" name="Comedy" onClick={changeGenre}>
            Comedy
          </a>
        </li>
        <li className="genre__link">
          <a href="#!" name="Crime" onClick={changeGenre}>
            Crime
          </a>
        </li>
        <li className="genre__link">
          <a href="#!" name="Documentary" onClick={changeGenre}>
            Documentary
          </a>
        </li>
        <li className="genre__link">
          <a href="#!" name="Drama" onClick={changeGenre}>
            Drama
          </a>
        </li>
        <li className="genre__link">
          <a href="#!" name="Family" onClick={changeGenre}>
            Family
          </a>
        </li>
        <li className="genre__link">
          <a href="#!" name="Fantasy" onClick={changeGenre}>
            Fantasy
          </a>
        </li>
        <li className="genre__link">
          <a href="#!" name="History" onClick={changeGenre}>
            History
          </a>
        </li>
        <li className="genre__link">
          <a href="#!" name="Horror" onClick={changeGenre}>
            Horror
          </a>
        </li>
        <li className="genre__link">
          <a href="#!" name="Music" onClick={changeGenre}>
            Music
          </a>
        </li>
        <li className="genre__link">
          <a href="#!" name="Mystery" onClick={changeGenre}>
            Mystery
          </a>
        </li>
        <li className="genre__link">
          <a href="#!" name="Romance" onClick={changeGenre}>
            Romance
          </a>
        </li>
        <li className="genre__link">
          <a href="#!" name="Science Fiction" onClick={changeGenre}>
            Science Fiction
          </a>
        </li>
        <li className="genre__link">
          <a href="#!" name="TV Movie" onClick={changeGenre}>
            TV Movie
          </a>
        </li>
        <li className="genre__link">
          <a href="#!" name="Thriller" onClick={changeGenre}>
            Thriller
          </a>
        </li>
        <li className="genre__link">
          <a href="#!" name="War" onClick={changeGenre}>
            War
          </a>
        </li>
        <li className="genre__link">
          <a href="#!" name="Western" onClick={changeGenre}>
            Western
          </a>
        </li>
      </ul>
    </div>
  );
}
