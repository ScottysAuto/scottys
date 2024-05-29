import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import logo from "../assets/scottys.png";
import "../styles/NavBar.css";

const Navbar = () => {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();

      console.log("Logged out");
    } catch (error) {
      console.error("Failed to logout", error);
    }
  };

  return (
    <nav>
      <img src={logo} alt="Logo" className="logo" />

      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        {currentUser && (
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        )}

        <li>
          {currentUser ? (
            <a onClick={handleLogout}>Logout</a>
          ) : (
            <Link to="/SignIn">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
