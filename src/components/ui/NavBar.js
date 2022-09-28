import { Link, NavLink } from "react-router-dom";
import header from "../../images/header.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg d-flex justify-content-between align-items-center container">
      <div className="d-flex align-items-center justify-content-center w-25" >
        <Link to="/" >
          <img src={header} alt={header} className="w-50" />
          <span className="fs-1">BAX</span>
        </Link>
        
      </div>
      <button
        className="navbar-toggler mx-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
        <div className="navbar-nav w-50 justify-content-between">
          <NavLink to="/Cursos">Cursos</NavLink>
          <NavLink to="/Testimoniales">Testimoniales</NavLink>
          <NavLink to="/Nosotros">Nosotros</NavLink>
          <NavLink to="/Form">Contacto</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

{
  /* <nav className="navegacion">
      
    </nav> */
}
