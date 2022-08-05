import "../App.css";
import { isLogged } from "../utils/firebase";
import Login from "./login";
import Logout from "./logout";
function Navbar() {
  let element;

  let currentPage = window.location.pathname;

  if (isLogged() === false) {
    element = <Login />;
  } else {
    element = <Logout />;
  }

  return (
    <div className="navbar">
      <ul>
        <li className="navbar-li">
          <div className={currentPage === "/" ? "link-active" : ""}>
            <a href="/">
              <img
                src="https://www.nicepng.com/png/full/800-8005038_login-dashboard-icon-white-png.png"
                alt=""
                width="20"
              ></img>
              Tablero
            </a>
          </div>
        </li>
        <li className="navbar-li">
          <div className={currentPage === "/clientes" ? "link-active" : ""}>
            <a href="/clientes">
              <img
                src="https://www.pngkey.com/png/full/235-2350076_gmw-host-clipart-library-people-icon-png-white.png"
                alt=""
                width="20"
              ></img>
              Clientes
            </a>
          </div>
        </li>
        <li className="navbar-li">
          <div className={currentPage === "/productos" ? "link-active" : ""}>
            <a href="/productos">
              <img
                src="https://www.ubolosoft.com/Carrito/images/carrito.png"
                alt=""
                width="20"
              ></img>
              Productos
            </a>
          </div>
        </li>
        <li className="navbar-li">{element}</li>
      </ul>
    </div>
  );
}

export default Navbar;
