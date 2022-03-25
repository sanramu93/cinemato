import "./Header.css";
import {
  HiOutlineMenu,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineSearch,
} from "react-icons/hi";

export default function Header() {
  return (
    <header className="header">
      <HiOutlineMenu className="header__icon" />
      <div className="header__search">
        <HiOutlineSearch className="header__icon header__search__icon" />
        <input type="text" />
      </div>
      <HiOutlineMoon className="header__icon" />
    </header>
  );
}
