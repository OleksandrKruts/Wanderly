import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";

import "./header.css";
import { AuthContext } from "../../auth/AuthContext";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo">Wanderly</div>

        <nav className="nav">
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/travelers">Travelers</NavLink>

          <NavLink to="/places">Places</NavLink>
        </nav>

        <div className="auth">
          {user ? (
            <>
              <span className="user-email">{user.email}</span>

              <button className="btn logout-btn" onClick={handleLogout}>
                Log out
              </button>
            </>
          ) : (
            <button className="btn" onClick={() => navigate("/login")}>
              Sign In
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
