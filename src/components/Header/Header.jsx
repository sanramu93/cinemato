import "./Header.css";
import {
  HiOutlineMenu,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineSearch,
} from "react-icons/hi";

export default function Header({ toggleShowMenu }) {
  return (
    <header className="header">
      <button className="header__btn-menu" onClick={toggleShowMenu}>
        <HiOutlineMenu className="header__icon" />
      </button>
      <div className="header__search">
        <HiOutlineSearch className="header__icon header__search__icon" />
        <input type="text" />
      </div>
      <HiOutlineMoon className="header__icon" />
    </header>
  );
}
