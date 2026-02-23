import { NavLink } from "react-router-dom";

function NavBar({ isAuthenticated, onLogout }) {
  return (
    <nav 
      className="navbar navbar-expand-lg shadow-lg sticky-top"
      style={{ 
        background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
        padding: "2rem 0",
        fontSize: "1.35rem",
        borderBottom: "4px solid #2196f3"
      }}
    >
      <div className="container-fluid px-5">

        <NavLink 
          className="navbar-brand fw-bold" 
          to="/" 
          style={{ 
            fontSize: "2.8rem", 
            color: "#1976d2",
            letterSpacing: "3px",
            textShadow: "2px 2px 4px rgba(0,0,0,0.1)"
          }}
        >
          Chez nous
        </NavLink>

        <button
          className="navbar-toggler border-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">

          <ul className="navbar-nav mx-auto gap-5">
            <li className="nav-item">
              <NavLink className="nav-link text-dark fw-semibold" to="/menu">
                MENU
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark fw-semibold" to="/reservation">
                RÉSERVATION
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark fw-semibold" to="/panier">
                PANIER
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark fw-semibold" to="/contact">
                CONTACT
              </NavLink>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            {isAuthenticated ? (
              <button
                onClick={onLogout}
                className="btn btn-outline-danger fw-bold px-4 py-2"
                style={{ borderRadius: "50px" }}
              >
                Déconnexion
              </button>
            ) : (
              <NavLink
                to="/login"
                className="btn btn-primary text-white fw-bold px-5 py-2 shadow"
                style={{ borderRadius: "50px" }}
              >
                Connexion
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
