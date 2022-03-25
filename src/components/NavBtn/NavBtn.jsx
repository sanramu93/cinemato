import "./NavBtn.css";
export default function NavBtn({ icon, handleClick }) {
  return (
    <button className="nav-btn" onClick={handleClick}>
      {icon}
    </button>
  );
}
