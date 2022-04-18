import "./NavBtn.css";
export default function NavBtn({ disable, icon, handleClick }) {
  return (
    <button disabled={disable} className="nav-btn" onClick={handleClick}>
      {icon}
    </button>
  );
}
