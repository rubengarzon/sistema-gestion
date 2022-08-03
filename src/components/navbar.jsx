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
          <div className={currentPage === "/tablero" ? "link-active" : ""}>
            <a href="/tablero">
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRci4mPCD3TI3d_IB7QfnaWJUtLuLsPvkX1wA&usqp=CAU"
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
