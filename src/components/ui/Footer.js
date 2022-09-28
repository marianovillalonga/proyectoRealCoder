import NavBarFoot from "./NavBarFoot";
import "boxicons";

const Footer = () => {
  return (
    <div>
      <section>
        <footer className="footer seccion">
          <div className="derecha">
            <nav className="navegacion">
              <NavBarFoot />
            </nav>
          </div>
          <p className="copyright">Todos los derechos Reservados 2022 &copy;</p>
        </footer>
      </section>
    </div>
  );
};
export default Footer;
