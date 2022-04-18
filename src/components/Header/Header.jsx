import { useNavigate } from "react-router-dom";
import {
  HiOutlineMenu,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineSearch,
} from "react-icons/hi";

import "./Header.css";
import Overlay from "../Overlay/Overlay";

export default function Header({
  toggleShowMenu,
  showMenu,
  handleSearchSubmit,
  inputRef,
  handleOverlayClick,
}) {
  const navigate = useNavigate();

  return (
    <>
      {showMenu && <Overlay handleOverlayClick={handleOverlayClick} />}
      <header className="header">
        <button className="header__btn-menu" onClick={toggleShowMenu}>
          <HiOutlineMenu className="header__icon" />
        </button>

        <div className="header__search">
          <HiOutlineSearch className="header__icon header__search__icon" />
          <form
            onSubmit={(e) => {
              handleSearchSubmit(e);
              navigate("/");
            }}
          >
            <input ref={inputRef} type="text" />
          </form>
        </div>

        <HiOutlineMoon className="header__icon" />
      </header>
    </>
  );
}
