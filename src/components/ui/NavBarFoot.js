import { NavLink } from "react-router-dom";

const NavBarFoot = () => {
  return (
    <nav className="navegacion">
      <NavLink to="/Cursos"><box-icon type='logo' name='facebook'></box-icon></NavLink>
      <NavLink to="/Testimoniales"><box-icon name='instagram' type='logo' ></box-icon></NavLink>
      <NavLink to="/Nosotros"><box-icon name='linkedin-square' type='logo' ></box-icon></NavLink>
      <NavLink to="/Form"><box-icon name='envelope' ></box-icon></NavLink>
      <NavLink to="/Form"><box-icon name='twitter' type='logo' ></box-icon></NavLink>
    </nav>
  );
};



export default NavBarFoot;