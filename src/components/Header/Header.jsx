import { useNavigate } from "react-router-dom";
import { HiOutlineMenu, HiOutlineMoon, HiOutlineSearch } from "react-icons/hi";

import { FaSun } from "react-icons/fa";

import "./Header.css";
import Overlay from "../Overlay/Overlay";

export default function Header({
  toggleDarkMode,
  darkMode,
  toggleShowMenu,
  showMenu,
  showMenuOverlay,
  handleSearchSubmit,
  inputRef,
  handleOverlayClick,
}) {
  const navigate = useNavigate();

  return (
    <>
      {showMenu && showMenuOverlay ? (
        <Overlay handleOverlayClick={handleOverlayClick} />
      ) : null}
      <header className={`header ${darkMode && "dark"}`}>
        <button className="header__btn-menu" onClick={toggleShowMenu}>
          <HiOutlineMenu className="header__icon" />
        </button>

        <div className="header__search">
          <button className="header__btn-menu">
            <HiOutlineSearch className="header__icon header__search__icon" />
          </button>
          <form
            onSubmit={(e) => {
              handleSearchSubmit(e);
              navigate("/");
            }}
          >
            <input ref={inputRef} type="text" />
          </form>
        </div>
        <button className="header__btn-menu" onClick={toggleDarkMode}>
          {darkMode ? (
            <FaSun className="header__icon" />
          ) : (
            <HiOutlineMoon className="header__icon" />
          )}
        </button>
      </header>
    </>
  );
}
