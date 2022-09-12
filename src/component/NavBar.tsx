import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar">
      <h1>The TypeScript Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Create">New Blog</Link>
      </div>
    </div>
  );
};

export default NavBar;
