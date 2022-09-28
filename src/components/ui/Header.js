import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import header from "../../images/header.png";

const Header = () => {
  return (
    <div>
        <section>
          <header id="main-header">
            {/* <div className="contenedor contenido-header">
                <div className="barra">
                 
                    <Link to="/" className='logo'>
                      <img src={header} alt={header} className="w-100" />
                      <h1>BAX</h1>
                    </Link>
               
                  <div className="derecha">
                      <nav className="navegacion"> */}
                        <NavBar/>
                     {/*  </nav>
                  </div>
                </div> */}
               {/*  <h1>Bienvenidos a nuestra Página</h1>
            </div> */}
          </header>
        </section>
    </div>
  )
}
export default Header