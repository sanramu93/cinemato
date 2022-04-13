import "./Header.css";
import {
  HiOutlineMenu,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineSearch,
} from "react-icons/hi";

export default function Header({
  toggleShowMenu,
  handleSearchSubmit,
  showSearch,
  inputRef,
}) {
  return (
    <header className="header">
      <button className="header__btn-menu" onClick={toggleShowMenu}>
        <HiOutlineMenu className="header__icon" />
      </button>
      {showSearch ? (
        <div className="header__search">
          <HiOutlineSearch className="header__icon header__search__icon" />
          <form onSubmit={handleSearchSubmit}>
            <input ref={inputRef} type="text" />
          </form>
        </div>
      ) : null}

      <HiOutlineMoon className="header__icon" />
    </header>
  );
}
